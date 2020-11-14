import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import RandomChoice from './components/randomChoice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <div className="App-body">

        <RandomChoice></RandomChoice>
      </div>
    </div>
  );
}

export default App;
