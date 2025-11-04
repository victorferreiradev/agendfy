import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Debug info
console.log('🚀 React App iniciando...');
console.log('📡 API_URL:', import.meta.env.VITE_API_URL);
console.log('🎨 Tailwind carregado');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)