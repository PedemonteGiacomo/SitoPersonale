import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'Azure',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
];

const Skills: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center space-x-2"
        >
          <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
          <span>{skill.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
