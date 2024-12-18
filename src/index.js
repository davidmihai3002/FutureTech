import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const Index = () =>{
  return <App />
}
const container = document.getElementById('container');
const root = createRoot(container)
root.render(<Index/>);

reportWebVitals();
