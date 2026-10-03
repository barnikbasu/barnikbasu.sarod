import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Disable automatic browser scroll restoration on refresh/load
if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

if (typeof window !== 'undefined' && !window.location.hash) {
  window.scrollTo(0, 0);
}

createRoot(document.getElementById('root')!).render(<App />);
