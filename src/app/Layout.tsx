import React from 'react';
import { Navbar } from '../components/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-950 grid-bg">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-gray-950/80 border-t border-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>
            Built with React, TypeScript, and Tailwind CSS • Hosted on Firebase
          </p>
          <p className="mt-2">
            © 2026 Giacomo Pedemonte • Made with ❤️ in Genova
          </p>
        </div>
      </footer>
    </div>
  );
}