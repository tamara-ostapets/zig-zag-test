import React from 'react';
import './Button.scss';

export const Button = ({text, onClick}) => (
    <button 
      onClick={onClick}
      className="Button"
    >
      {text}
    </button>
)