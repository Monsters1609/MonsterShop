import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PA } from './Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* PA : Provider App */}
    <PA>
      <App />
    </PA>
  </React.StrictMode>
);
