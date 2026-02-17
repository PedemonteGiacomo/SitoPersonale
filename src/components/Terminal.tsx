import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import { scrollToElement, getThemeFromStorage, setThemeInStorage } from '../utils';

interface TerminalEntry {
  command: string;
  output: string;
  type: 'command' | 'output' | 'error';
  timestamp: Date;
}

const commands = {
  help: () => `Available commands:
  help       - Show this help message
  about      - Show information about me  
  experience - Display work experience
  education  - Show educational background
  skills     - List technical skills
  projects   - View my projects
  contact    - Get contact information
  clear      - Clear terminal
  theme      - Toggle light/dark theme
  
Type any command and press Enter.`,
  
  about: () => `${portfolioData.name}
Location: ${portfolioData.location}
Role: ${portfolioData.headline}

I'm a passionate software engineer specializing in cloud platforms,
DevOps practices, and medical imaging technologies. Currently working
at Esaote developing cloud-native solutions for advanced medical imaging.`,

  experience: () => portfolioData.experience.map(exp => 
    `${exp.company} - ${exp.position}
${exp.location} | ${exp.period}
${exp.description}
`).join('\n'),

  education: () => portfolioData.education.map(edu => 
    `${edu.institution}
${edu.degree} | ${edu.period}
${edu.location}${edu.grade ? ` | Grade: ${edu.grade}` : ''}
`).join('\n'),

  skills: () => `Technical Skills:

Languages: ${portfolioData.toolbox.languages.join(', ')}
Markup/Style: ${portfolioData.toolbox.markup.join(', ')}
Frameworks: ${portfolioData.toolbox.frameworks.join(', ')}
Platforms: ${portfolioData.toolbox.platforms.join(', ')}`,

  projects: () => `My Projects:

${portfolioData.projects.map((project, idx) => 
  `${idx + 1}. ${project.title}
   ${project.description}
   Link: ${project.link}
   Tags: ${project.tags.join(', ')}
`).join('\n')}

Type 'contact' for ways to reach me!`,

  contact: () => `Get in touch:

GitHub: ${portfolioData.social.github}
LinkedIn: ${portfolioData.social.linkedin}
Email: ${portfolioData.social.email}
${portfolioData.social.phone ? `Phone: ${portfolioData.social.phone}` : ''}

Feel free to reach out for collaborations or opportunities!`,

  clear: () => 'CLEAR_TERMINAL',

  theme: () => {
    const currentTheme = getThemeFromStorage();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    console.log('Changing theme from', currentTheme, 'to', newTheme);
    
    setThemeInStorage(newTheme);
    
    // Force immediate theme application
    document.body.classList.toggle('dark', newTheme === 'dark');
    
    console.log('Body classes after change:', document.body.classList.toString());
    
    return `Theme switched to ${newTheme} mode`;
  }
};

export function Terminal() {
  const [entries, setEntries] = React.useState<TerminalEntry[]>([
    {
      command: '',
      output: 'Welcome to Giacomo\'s Portfolio Terminal!\nType "help" to see available commands.',
      type: 'output',
      timestamp: new Date()
    }
  ]);
  const [currentInput, setCurrentInput] = React.useState('');
  const [commandHistory, setCommandHistory] = React.useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = React.useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    terminalRef.current?.scrollTo({ 
      top: terminalRef.current.scrollHeight, 
      behavior: 'smooth' 
    });
  }, [entries]);

  const executeCommand = (input: string) => {
    const trimmedInput = input.trim().toLowerCase();
    
    if (!trimmedInput) return;

    // Add to history
    setCommandHistory(prev => [...prev, trimmedInput]);
    setHistoryIndex(-1);

    // Process command
    let output: string;
    let scrollTarget: string | null = null;

    if (commands[trimmedInput as keyof typeof commands]) {
      output = commands[trimmedInput as keyof typeof commands]();
      
      // Handle special commands
      if (output === 'CLEAR_TERMINAL') {
        setEntries([{
          command: '',
          output: 'Terminal cleared. Type "help" for available commands.',
          type: 'output',
          timestamp: new Date()
        }]);
        setCurrentInput('');
        return;
      }

      // Navigation commands
      if (trimmedInput === 'projects') {
        setTimeout(() => navigate('/projects'), 1000);
      } else if (trimmedInput === 'contact') {
        setTimeout(() => navigate('/contact'), 1000);
      } else if (['about', 'experience', 'education', 'skills'].includes(trimmedInput)) {
        scrollTarget = trimmedInput;
      }
      
    } else {
      output = `Command not found: ${trimmedInput}\nType "help" to see available commands.`;
    }

    // Add new entry
    const newEntry: TerminalEntry = {
      command: `giacomo@portfolio:~$ ${input}`,
      output,
      type: output.startsWith('Command not found') ? 'error' : 'output',
      timestamp: new Date()
    };

    setEntries(prev => [...prev, newEntry]);
    setCurrentInput('');

    // Handle scrolling to section
    if (scrollTarget) {
      setTimeout(() => scrollToElement(scrollTarget), 500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < 0 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <div 
      className="bg-gray-900/95 border border-gray-700 rounded-lg p-4 font-mono text-sm max-h-96 overflow-hidden flex flex-col neon-glow"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center mb-2 text-gray-400 text-xs">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-4">Terminal - Portfolio</span>
      </div>

      <div 
        ref={terminalRef}
        className="flex-1 overflow-y-auto mb-2 space-y-2 scrollbar-thin scrollbar-thumb-gray-600"
      >
        {entries.map((entry, index) => (
          <div key={index}>
            {entry.command && (
              <div className="text-neon-green">{entry.command}</div>
            )}
            <div className={`whitespace-pre-line ${
              entry.type === 'error' ? 'text-red-400' : 'text-gray-300'
            }`}>
              {entry.output}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center">
        <span className="text-neon-green mr-2">giacomo@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-gray-100 caret-neon-green focus:ring-0"
          placeholder="Type 'help' for commands..."
          autoComplete="off"
        />
      </div>
    </div>
  );
}