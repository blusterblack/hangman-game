import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Life from './Life';
import Word from './Word';

import Result from './Result';
import ButtonInput from './ButtonInput';

export default function HangmanGame({ wordList, defaultLife }) {
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 },
    (_, i) => start + (i * step));
  const [life, setLife] = useState(defaultLife);
  const [word, setWord] = useState(wordList[Math.floor(Math.random() * wordList.length)]);
  const [usedChar, setUsedChar] = useState([]);
  const [curChar, setCurChar] = useState(range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map((x) => String.fromCharCode(x)));
  const [time, setTime] = useState(0);
  const [isOn, setIsOn] = useState(true);

  function newGame() {
    setLife(defaultLife);
    setWord(wordList[Math.floor(Math.random() * wordList.length)]);
    setUsedChar([]);
    setCurChar(range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map((x) => String.fromCharCode(x)));
    setTime(0);
    setIsOn(true);
  }
  function createShowedWord(w, uC) {
    let tmp = '';
    if (uC === 1) { return tmp; }
    [...w].forEach((x) => { tmp += uC.includes(x) ? x : '*'; });
    return tmp;
  }
  function guess(char) {
    setUsedChar([...usedChar, char]);
    setCurChar(curChar.filter((x) => x !== char));

    if (!word.includes(char)) setLife(life - 1);
  }
  useEffect(() => {
    if ((life === 0 || !createShowedWord(word, usedChar).includes('*'))) setIsOn(false);
    const timer = setInterval(() => { if (isOn) setTime(time + 1); }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time, isOn, life, usedChar, word]);
  return (
    <div>
      Time:
      {time}
      <Life value={life} />
      {life !== 0 ? <Word word={createShowedWord(word, usedChar)} /> : word}
      {!(life === 0 || !createShowedWord(word, usedChar).includes('*'))
        ? <ButtonInput curChar={curChar} onClick={guess} />
        : <Result life={life} showWord={createShowedWord(word, usedChar)} onReset={newGame} />}
    </div>

  );
}
HangmanGame.propTypes = {
  wordList: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultLife: PropTypes.number,
};
HangmanGame.defaultProps = { defaultLife: 7 };
