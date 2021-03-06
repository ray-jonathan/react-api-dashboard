import React from 'react';
import './App.css'; //
import Weather from './Weather';
import Fortune from './Fortune';
import Joke from './Joke';
import GOT from './GOT';


function App() {
  return (
    <div style={{backgroundColor: `#282c34`}} className="App">
      <h2 style={{margin: `0`, color: `#FFF`} }>React Dashboard</h2>
      <header className="App-header">
      <Weather />
      <Fortune />
      <Joke />
      <GOT />
      </header>
    </div>
  );
}

export default App;
