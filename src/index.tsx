import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

document.getElementById("loader-wrapper")?.remove()
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);