import React from 'react';
import FetchPoe from './components/FetchPoe';
import PlayerSearch from './components/PlayerSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Path of Exile</h2>
      </header>
      <PlayerSearch />
      <FetchPoe />
    </div>
  );
}


export default App