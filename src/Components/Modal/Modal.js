import React from 'react';
import { AnimatePresence } from 'framer-motion'
import { BounceInDownDiv } from './BounceInDown';

const Modal = ({ isModal, setModal, children }) => {
  return (
    <AnimatePresence>
      {isModal && (
        <BounceInDownDiv
        className="bg-slate-50 border border-purple-500"
          style={{
            position: 'fixed',
            background: '',
            width: '500px',
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            borderRadius: '5px',
            zIndex: '100',
          
          }}
        >
          <button
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}
            onClick={() => setModal(false)}
          >
            X
          </button>
          {children}
        </BounceInDownDiv>
      )}
    </AnimatePresence>
  );
};

export default Modal;