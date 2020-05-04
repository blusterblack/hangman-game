import React from 'react';
import PropTypes from 'prop-types';

function Result({ life, showWord, onReset }) {
  return (
    <div>
      {life === 0 && <div>Lose</div>}
      {!showWord.includes('*') && <div>Win</div>}
      <button type="button" onClick={onReset} style={{ height: '10vh', width: '10vh', fontSize: '3vh' }}>Again</button>
    </div>
  );
}

Result.propTypes = {
  life: PropTypes.number.isRequired,
  showWord: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Result;
