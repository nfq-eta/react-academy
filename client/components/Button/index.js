import React from 'react';

const Button = ({ title, click, className }) => {
  return (
    <button className={className} onClick={click}>{title}</button>
  );
};

export default Button;
