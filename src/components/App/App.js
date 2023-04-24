import React, { useContext, useState } from 'react';
import './App.css';
import Portal from '../Portal/Portal';
import Modal from '../Modal/Modal';
import { ThemeContext } from '../../context/ThemeContext';

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const {isDark, handleTheme, ThemeColor} = useContext(ThemeContext);

  return (
    <div className={`App ${ThemeColor}`}>
      <div className='container'>
        <div>
          {isShowModal && 
            <Portal>
              <Modal onCLose={() => setIsShowModal(false)}/>
            </Portal>}

        </div>
        <h2>Change to {isDark ? 'Dark' : 'Light'} Theme</h2>
        <div className='button-theme'>
          <button onClick={handleTheme} className={`button-theme__btn ${ThemeColor}`}>
            Change
          </button>
        </div>
        <div className='modal-section'>
          <h2>Show Modal</h2>
          <button onClick={() => setIsShowModal(!isShowModal)} className={`modal-section__btn ${ThemeColor}`}>
            Show modal
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
