import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexBox = styled.div`display:flex;
flex-wrap:wrap;
justify-content:center;`;
const FlexItem = styled.button`
font-size:5vh;
min-width:10vh;
min-height:10vh;`;
function ButtonInput({ curChar, onClick }) {
  const handleClick = (event) => onClick(event.target.textContent);
  return (
    <FlexBox>{curChar.map((x) => <FlexItem key={x} onClick={handleClick}>{x}</FlexItem>)}</FlexBox>

  );
}
ButtonInput.propTypes = {
  curChar: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonInput;
