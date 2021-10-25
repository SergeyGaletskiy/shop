import React from 'react';
import cl from './Modal.module.css';

interface IModal {
  text: string;
  onClick?: () => void;
  active: boolean;
  setActive: (active: boolean) => void;
}

export const Modal = ({ active, setActive, text, onClick }: IModal) => {
  console.log(active);
  return (
    <div
      onClick={() => setActive(false)}
      className={!active ? `${cl.container} ${cl.active}` : cl.container}
      // className={active ? cl.container : ''}
    >
      <div className={cl.text} onClick={(e) => e.stopPropagation()}>
        {text}
      </div>
    </div>
  );
};
