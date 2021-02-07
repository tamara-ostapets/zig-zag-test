import React from 'react';
import './Card.scss';
import cn from 'classnames';
import activeEllipse from '../../img/ellipse-lime.svg';
import inactiveEllipse from '../../img/ellipse.svg';

export const Card = ({
  chosenCard,
  card: {debit, credit, id},
  onSelect}) => (
    <div 
      className={cn('Card', {
        "Card--active": chosenCard === id
      })}
      onClick={() => {
        onSelect(credit, id);
      }}
      onFocus={() => {
        onSelect(credit, id);
      }}
      >
        <div className="Card__main">
          <div className="Card__debit">
            <h5 className="Card__headline Card__debit-headline">
              Пополнить на
            </h5>
            <p className="Card__sum Card__debit-sum">
              $&nbsp;{debit}
            </p>
          </div>
  
          <div className="Card__credit">
            <h5 className="Card__headline Card__credit-headline">
              Получить 
            </h5>
  
            <p className="Card__sum Card__credit-sum">
              $&nbsp;{credit}
            </p>
          </div>
        </div>

        {(chosenCard === id)
          ? (<img 
            src={activeEllipse} 
            alt="inactive ellipse" 
            className="Card__ellipse"/>)
          : (<img 
            src={inactiveEllipse} 
            alt="inactive ellipse" 
            className="Card__ellipse"/>)
        }
      </div>
)
