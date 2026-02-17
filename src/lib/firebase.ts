import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in production and if supported)
export const initAnalytics = async () => {
  try {
    // Only initialize in production
    if (import.meta.env.MODE !== 'production') {
      console.log('Analytics disabled in development mode');
      return null;
    }

    // Check if analytics is supported
    const supported = await isSupported();
    if (!supported) {
      console.log('Analytics not supported in this environment');
      return null;
    }

    // Initialize analytics
    const analytics = getAnalytics(app);
    console.log('Firebase Analytics initialized successfully');
    return analytics;
    
  } catch (error) {
    console.warn('Failed to initialize Firebase Analytics:', error);
    return null;
  }
};

export default app;