import React, { children } from 'react';
import close from '../images/icon-close.svg';

const Modal = ({children, isOpen, closeModal}) => {
    const handleModalContainerClick = e => e.stopPropagation();

    return (
    <>
        <article onClick={closeModal} className={`modal ${isOpen && "is-open"}`}>
            <div className='modal-container' onClick={handleModalContainerClick}>
                <button className='modal-close' onClick={closeModal}><img src={close} /></button>
                {children}
            </div>
        </article>
    </>
    );
};
export default Modal;