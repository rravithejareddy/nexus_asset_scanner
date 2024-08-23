import React from 'react';
import GLOBAL9x8AdvantageEVO from './data/Images/GLOBAL9x8AdvantageEVO.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={GLOBAL9x8AdvantageEVO} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
