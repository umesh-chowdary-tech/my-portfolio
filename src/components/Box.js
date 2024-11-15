// Box.js
import React from 'react';
import './Box.css';

const Box = ({ children, className, style, ...props }) => {
  return (
    <div className={`box ${className}`} style={style} {...props}>
      {children}
    </div>
  );
};

export default Box;
