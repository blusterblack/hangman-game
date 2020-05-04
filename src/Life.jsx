import React from 'react';
import PropTypes from 'prop-types';

function Life({ value }) {
  return (
    <div>
      Current life:
      {value}
    </div>
  );
}

Life.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Life;
