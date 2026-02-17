import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'About', href: '/about', id: 'about' },
  { name: 'Projects', href: '/projects', id: 'projects' },
  { name: 'Contact', href: '/contact', id: 'contact' }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold text-neon-green hover:text-neon-blue transition-colors focus-ring"
          >
            giacomo@portfolio:~$
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors focus-ring rounded-md",
                  isActive(item.href)
                    ? "text-neon-green bg-gray-800/50"
                    : "text-gray-300 hover:text-neon-green hover:bg-gray-800/30"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-300 hover:text-neon-green focus-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={cn(
                  "block px-3 py-2 text-base font-medium transition-colors focus-ring rounded-md",
                  isActive(item.href)
                    ? "text-neon-green bg-gray-800/50"
                    : "text-gray-300 hover:text-neon-green hover:bg-gray-800/30"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}