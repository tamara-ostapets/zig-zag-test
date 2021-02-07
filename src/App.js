// import logo from './logo.svg';
import React, {useState} from 'react';
import './styles/App.scss';
import {Button} from './components/Button';
import {Modal} from './components/Modal';
import { v4 as uuidv4 } from 'uuid';

const initialCards = [
  {
    debit: 50,
    credit: 100,
    id: uuidv4(),
  },
  {
    debit: 100,
    credit: 200,
    id: uuidv4()
  },
  {
    debit: 500,
    credit: 1000,
    id: uuidv4()
  }
];

const options = [
  {
    title: 'Банковская карта',
    option: 'bank'
  },
  {
    title: 'Биткоин',
    option: 'bitcoin'
  },
  {
    title: 'Выставить счет',
    option: 'bill'
  },
];

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [cards, setCards] = useState(initialCards);

  const showModal = () => {
    setModalIsVisible(prev => !prev);
  }

  const closeModal = () => {
    setModalIsVisible(false);
  }

  return (
   <div className="App">
     {modalIsVisible
     ? (<Button text="Закрыть модалку" onClick={showModal}/>)
     : (<Button text="Открыть модалку" onClick={showModal}/>)
     }

     {modalIsVisible && <Modal closeModal={closeModal} cards={cards} options={options} />}
   </div>
  );
}

export default App;
