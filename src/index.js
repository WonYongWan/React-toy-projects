import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import TodoApp from './TodoApp';
import './TodoApp.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp/>
  </React.StrictMode>
);