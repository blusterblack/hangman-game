import React from 'react';
import PropTypes from 'prop-types';

function Word({ word }) {
  return (
    <div>
      Current word:
      {word}
    </div>
  );
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
};

export default Word;
