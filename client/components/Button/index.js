import React from 'react';

const Button = ({ title, click, className, disable }) => {
  return (
    <button className={className} disabled={disable} onClick={click}>{title}</button>
  );
};

export default Button;
