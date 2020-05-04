import React from 'react';
import './App.css';
import HangmanGame from './HangmanGame';

function App() {
  const wordList = ['king', 'flashlight', 'neophyte', 'medical', 'zephyr', 'cat', 'dog', 'furios'].map((x) => x.toUpperCase());

  return (
    <div className="App">
      <HangmanGame wordList={wordList} />
    </div>
  );
}

export default App;
