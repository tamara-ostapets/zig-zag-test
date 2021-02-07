import React, {useEffect, useState, useRef} from 'react';
import './Modal.scss';
import {ModalFooter} from '../ModalFooter';
import {Button} from '../Button';
import {CardsList} from '../CardsList';
import {Form} from '../Form';
import {Timer} from '../Timer';


export const Modal = ({closeModal, cards, options}) => {
  const [selectedPayment, setPayment] = useState('Выберите способ оплаты');
  const [chosenCredit, setCredit] =useState(0);
  const [chosenCardId, setChosenCardId] = useState(null);
  const [finalSum, setFinalSum] = useState(null);
  const [timerMinutes, setTimerMinutes] = useState(16);
  const [timerSeconds, settimerSeconds] = useState(60);


  useEffect(() => {
    if(timerMinutes >= 10) {
      setTimeout(() => setTimerMinutes(timerMinutes - 1), 60000);
    }

    if (timerSeconds >= 10) {
      setTimeout(() => settimerSeconds(timerSeconds - 1), 1000);
    } else {
      settimerSeconds(60);
    }
  }, [timerMinutes, timerSeconds])


  useEffect(() => {
    setFinalSum(chosenCredit * 0.75)
  }, [chosenCredit])

  const onSelectOption = (optionValue) => {
    setPayment(optionValue);
  }

  const onSelectCard = (credit, id) => {
    setCredit(credit);

    if (chosenCardId === id) {
      setChosenCardId(null);
    } else {
      setChosenCardId(id);
    }
  }

  const alertHandler = () => {
    return (chosenCredit && selectedPayment !== 'Выберите способ оплаты')
    ? alert(`Выбраный способ оплаты: ${selectedPayment}. $${finalSum} будет зачислено вам на счет.`)
    : alert ('Пожалуйста, убедитесь, что способ оплаты и кредитный план выбраны.');
  }

  return (
    <div className="Modal">

      <div className="Modal__header">
        <span className="Modal__trigger">+100%</span>
        <div 
          onClick={closeModal}
          className="Modal__close">
        </div>
      </div>

      <Timer timer={`00:${timerMinutes}:${timerSeconds}`} />

      <h3 className="Modal__headline">Увеличьте свой депозит!</h3>

      <Form 
        selectedPayment={selectedPayment} 
        options={options}
        onSelect={onSelectOption}
      />

      <div className="Modal__main">
        <CardsList 
          chosenCard={chosenCardId}
          onSelect={onSelectCard}
          cards={cards} 
        />

        {chosenCardId 
        ? (<p className="Modal__counter">
          <span className="Modal__sum">${finalSum}</span> будет зачислено вам на счет
        </p>)
        : (<p className="Modal__counter--hidden">
        <span className="Modal__sum">${finalSum}</span> будет зачислено вам на счет
      </p>)
      }

        <Button
          onClick={alertHandler}
          className="Modal__button" 
          text="Пополнить"
        />
      </div>
      <ModalFooter />
    </div>
  )
}