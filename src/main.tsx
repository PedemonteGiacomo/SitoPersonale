import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initAnalytics } from './lib/firebase'

// Initialize Firebase Analytics (safe failure)
initAnalytics().catch((error) => {
  console.warn('Firebase Analytics initialization failed:', error);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
