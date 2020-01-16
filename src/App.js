import React from 'react';
import FetchPoe from './components/FetchPoe';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <h2>Path of Exile</h2>
      </header>
      <FetchPoe />
    </div>
  );
}

export default App