import React from 'react';
import {Card} from '../Card';
import './CardsList.scss';

export const CardsList = ({cards, onSelect, chosenCard}) => (
    <div className="Cards">
      {cards.map(card => (
        <Card 
          chosenCard={chosenCard}
          onSelect={onSelect}
          key={card.id} 
          card={card} 
        />
      ))}
    </div>
)