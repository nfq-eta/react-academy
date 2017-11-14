import React from 'react';

const Button = ({ title, click }) => {
  return (
    <button onClick={click}>{title}</button>
  );
};

export default Button;
