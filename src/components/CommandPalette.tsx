import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Command } from 'cmdk';
import { 
  Home, 
  User, 
  FolderOpen, 
  Mail, 
  Github,
  Copy,
  Palette,
  Search
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { copyToClipboard, getThemeFromStorage, setThemeInStorage } from '../utils';

interface CommandPaletteProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function CommandPalette({ open, setOpen }: CommandPaletteProps) {
  const navigate = useNavigate();
  const [notification, setNotification] = React.useState<string | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 2000);
  };

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, [setOpen]);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setOpen(false)}
      />
      
      {/* Command Palette */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <Command className="bg-gray-900 border border-gray-700 rounded-lg shadow-xl max-w-lg w-screen mx-4 neon-glow">
          <div className="flex items-center px-4 py-2 border-b border-gray-700">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <Command.Input
              placeholder="Type a command or search..."
              className="flex-1 bg-transparent outline-none text-gray-100 placeholder-gray-400"
            />
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <kbd className="px-2 py-1 bg-gray-800 rounded border">Esc</kbd>
              <span>to close</span>
            </div>
          </div>
          
          <Command.List className="max-h-64 overflow-y-auto p-2">
            <Command.Empty className="px-4 py-2 text-gray-400 text-sm">
              No results found.
            </Command.Empty>

            {/* Navigation Commands */}
            <Command.Group heading="Navigate">
              <Command.Item
                className="flex items-center px-3 py-2 text-sm text-gray-100 hover:bg-gray-800 rounded cursor-pointer"
                onSelect={() => runCommand(() => navigate('/'))}
              >
                <Home className="w-4 h-4 mr-3 text-neon-green" />
                <span>Go to Home</span>
              </Command.Item>

              <Command.Item
                className="flex items-center px-3 py-2 text-sm text-gray-100 hover:bg-gray-800 rounded cursor-pointer"
                onSelect={() => runCommand(() => navigate('/about'))}
              >
                <User className="w-4 h-4 mr-3 text-neon-green" />
                <span>Go to About</span>
              </Command.Item>

              <Command.Item
                className="flex items-center px-3 py-2 text-sm text-gray-100 hover:bg-gray-800 rounded cursor-pointer"
                onSelect={() => runCommand(() => navigate('/projects'))}
              >
                <FolderOpen className="w-4 h-4 mr-3 text-neon-green" />
                <span>Go to Projects</span>
              </Command.Item>

              <Command.Item
                className="flex items-center px-3 py-2 text-sm text-gray-100 hover:bg-gray-800 rounded cursor-pointer"
                onSelect={() => runCommand(() => navigate('/contact'))}
              >
                <Mail className="w-4 h-4 mr-3 text-neon-green" />
                <span>Go to Contact</span>
              </Command.Item>
            </Command.Group>

            {/* Actions */}
            <Command.Group heading="Actions">
              <Command.Item
                className="flex items-center px-3 py-2 text-sm text-gray-100 hover:bg-gray-800 rounded cursor-pointer"
                onSelect={() => runCommand(async () => {
                  await copyToClipboard(portfolioData.social.email);
                  showNotification('Email copied to clipboard!');
                })}
              >
                <Copy className="w-4 h-4 mr-3 text-blue-400" />
                <span>Copy Email</span>
              </Command.Item>

              <Command.Item
                className="flex items-center px-3 py-2 text-sm text-gray-100 hover:bg-gray-800 rounded cursor-pointer"
                onSelect={() => runCommand(() => {
                  window.open(portfolioData.social.github, '_blank');
                })}
              >
                <Github className="w-4 h-4 mr-3 text-gray-400" />
                <span>Open GitHub</span>
              </Command.Item>

              <Command.Item
                className="flex items-center px-3 py-2 text-sm text-gray-100 hover:bg-gray-800 rounded cursor-pointer"
                onSelect={() => runCommand(() => {
                  const currentTheme = getThemeFromStorage();
                  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                  setThemeInStorage(newTheme);
                  showNotification(`Switched to ${newTheme} theme`);
                })}
              >
                <Palette className="w-4 h-4 mr-3 text-purple-400" />
                <span>Toggle Theme</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-neon-green px-4 py-2 rounded-lg shadow-lg border border-gray-700 z-50 animate-slide-up">
          {notification}
        </div>
      )}
    </>
  );
}