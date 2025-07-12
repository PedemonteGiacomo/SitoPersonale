import React, { useState } from 'react';
import Box from '@mui/material/Box';

const resumeYaml = `
name: Giacomo Pedemonte
role: Software Engineer
location: Genoa, Italy
education:
  - Master's in Software Engineering (ongoing), University of Genoa
  - Bachelor's in Computer Science, University of Genoa (2019-2022)
experience:
  - company: Esaote
    position: Software Engineer
    years: 2024-present
  - company: Ericsson
    position: Software Engineering Internship
    years: 2024
certifications:
  - AWS Certified Developer – Associate (2024)
skills:
  - React
  - TypeScript
  - Python
  - Docker
  - Azure
`;

const helpText = `Available commands:
  help              Show this message
  cat resume.yaml   Display resume information
  links             Show contact links
  clear             Clear the terminal\n`;

const prompt = '$ ';

export default function InteractiveCV() {
  const [history, setHistory] = useState<string[]>(['Type "help" to see available commands.']);
  const [input, setInput] = useState('');

  const runCommand = (command: string) => {
    switch (command.trim()) {
      case 'help':
        return helpText.trim();
      case 'cat resume.yaml':
        return resumeYaml.trim();
      case 'links':
        return 'GitHub: https://github.com/PedemonteGiacomo\nLinkedIn: https://www.linkedin.com/in/giacomo-pedemonte-3983a6236/';
      case 'clear':
        setHistory([]);
        return '';
      default:
        return `Command not found: ${command}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const output = runCommand(input);
    setHistory((prev) => [...prev, prompt + input, ...(output ? [output] : [])]);
    setInput('');
  };

  return (
    <Box
      id="interactive-cv"
      sx={{ fontFamily: 'monospace', background: '#000', color: '#0f0', p: 2 }}
    >
      {history.map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <span>{prompt}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ background: 'transparent', border: 'none', color: '#0f0', outline: 'none', width: '80%' }}
          autoFocus
        />
      </form>
    </Box>
  );
}
