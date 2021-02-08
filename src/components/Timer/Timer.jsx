import React from 'react';
import './Timer.scss';
import timerImg from '../../img/timer.svg';

export const Timer = ({timer}) => (
    <div className="Timer">
      <img 
        src={timerImg} 
        alt="timer image" 
        className="Timer_icon"
      />
      <span className="Timer__time">{timer}</span>
    </div>
)
