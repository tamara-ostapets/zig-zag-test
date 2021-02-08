import React from 'react';
import './Form.scss';

export const Form = ({options, selectedPayment, onSelect}) => (
    <form className="Form">
      <select 
        required
        className="Form__dropdown"
        value={selectedPayment}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option
          value={null}
        >
          Выберите способ оплаты
        </option>
        {options.map(opt => (
          <option 
          value={opt.title}
          key={opt.option} 
          className={`Form__option Form__option-${opt.option}`}
          >
            {opt.title}
        </option>
        ))}
      </select>
    </form>
)