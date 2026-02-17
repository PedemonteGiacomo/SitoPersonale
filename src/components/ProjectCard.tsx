import { ExternalLink, Github, Chrome } from 'lucide-react';
import type { Project } from '../data/portfolio';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="bg-gray-900/80 border border-gray-700 rounded-lg p-6 hover:border-neon-green/50 transition-all duration-300 group neon-glow hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold text-gray-100 mb-3 group-hover:text-neon-green transition-colors">
        {project.title}
      </h3>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-800 text-neon-green text-xs rounded-md border border-gray-700 font-mono"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center space-x-3">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-400 hover:text-neon-green transition-colors group/link"
          >
            <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
            <span className="text-sm">Code</span>
          </a>
        )}

        {project.chromeStoreLink && (
          <a
            href={project.chromeStoreLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors group/link"
          >
            <Chrome className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
            <span className="text-sm">Chrome Store</span>
          </a>
        )}

        {!project.chromeStoreLink && project.link !== project.githubLink && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors group/link"
          >
            <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
            <span className="text-sm">View</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}