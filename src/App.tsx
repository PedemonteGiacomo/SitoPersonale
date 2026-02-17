import React from 'react';
import { Router } from './app/Router';
import { getThemeFromStorage, setThemeInStorage } from './utils';

function App() {
  // Initialize theme on mount
  React.useEffect(() => {
    try {
      const savedTheme = getThemeFromStorage();
      setThemeInStorage(savedTheme);
    } catch (error) {
      console.warn('Theme initialization failed:', error);
    }
  }, []);

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
