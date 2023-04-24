import React, { Fragment } from 'react';
import closeImg from '../../assets/images/close-btn.svg';
import './Modal.css';

const Modal = ({ onCLose }) => {
    return (
        <Fragment>
            <div className='modal-wrapper' onClick={onCLose}></div>
            <div className='modal-window'>
                <div className='modal-window__wrapper'>
                    <h1>Modal window</h1>
                    <button onClick={onCLose}>
                        <img src={closeImg} className='modal-btn__img'/>
                    </button>
                </div>
                <div className='modal-window__description'>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, at earum. Alias dolorem, exercitationem temporibus distinctio vel, quam nobis repudiandae itaque, ratione assumenda facilis. Repellat consectetur tenetur asperiores quo consequuntur?
                    </p>

                </div>
            </div>
        </Fragment>
    );
}

export default Modal;