import React, { useState } from 'react';
import Box from '@mui/material/Box';

const resumeYaml = `
name: Giacomo Pedemonte
role: Software Engineer
experience:
  - company: Example Corp
    position: Developer
    years: 2020-2022
  - company: Another Inc
    position: Researcher
    years: 2018-2020
skills:
  - JavaScript
  - TypeScript
  - React
`;

const helpText = `Available commands:
  help              Show this message
  cat resume.yaml   Display resume information
  clear             Clear the terminal\n`;

const prompt = '$ ';

export default function InteractiveCV() {
  const [history, setHistory] = useState<string[]>(['Type \"help\" to get started.']);
  const [input, setInput] = useState('');

  const runCommand = (command: string) => {
    switch (command.trim()) {
      case 'help':
        return helpText.trim();
      case 'cat resume.yaml':
        return resumeYaml.trim();
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
