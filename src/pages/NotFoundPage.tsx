import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Terminal as TerminalIcon } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal-style Error */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/80 border border-gray-700 rounded-lg p-6 mb-8 font-mono text-left neon-glow"
          >
            <div className="flex items-center mb-4 text-gray-400 text-sm">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4">Terminal - Error 404</span>
            </div>
            
            <div className="space-y-2">
              <div className="text-neon-green">giacomo@portfolio:~$ ls -la {window.location.pathname}</div>
              <div className="text-red-400">ls: cannot access '{window.location.pathname}': No such file or directory</div>
              <div className="text-neon-green">giacomo@portfolio:~$ echo $?</div>
              <div className="text-gray-300">404</div>
              <div className="text-neon-green mt-4">giacomo@portfolio:~$ <span className="animate-pulse">_</span></div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-6xl sm:text-8xl font-bold text-neon-green mb-4 font-mono"
          >
            404
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl sm:text-3xl font-semibold text-white mb-4"
          >
            Page Not Found
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-gray-300 mb-8 leading-relaxed"
          >
            Looks like you've ventured into uncharted territory. The page you're looking for 
            doesn't exist in this repository.
          </motion.p>

          {/* Navigation Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link
              to="/"
              className="px-6 py-3 bg-neon-green text-gray-950 font-semibold rounded-lg hover:bg-neon-blue transition-colors inline-flex items-center justify-center space-x-2 focus-ring"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 border border-neon-green text-neon-green hover:bg-neon-green hover:text-gray-950 transition-colors rounded-lg inline-flex items-center justify-center space-x-2 focus-ring"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-gray-400"
          >
            <p className="mb-4">Maybe you're looking for:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                to="/about" 
                className="text-neon-green hover:text-neon-blue transition-colors focus-ring rounded px-2 py-1"
              >
                About Me
              </Link>
              <Link 
                to="/projects" 
                className="text-neon-green hover:text-neon-blue transition-colors focus-ring rounded px-2 py-1"
              >
                My Projects
              </Link>
              <Link 
                to="/contact" 
                className="text-neon-green hover:text-neon-blue transition-colors focus-ring rounded px-2 py-1"
              >
                Contact Info
              </Link>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-6 text-xs flex items-center justify-center space-x-2"
            >
              <TerminalIcon className="w-4 h-4 text-neon-green" />
              <span>Press <kbd className="px-1 py-0.5 bg-gray-800 rounded text-neon-green">Ctrl+K</kbd> to open command palette</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}