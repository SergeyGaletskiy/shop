import React from 'react';
import cl from './CartButtonLittle.module.css';

interface ICartButtonLittle {
  text: string;
  onClick?: () => void;
}

export const CartButtonLittle = ({ text, onClick }: ICartButtonLittle) => {
  return (
    <button className={cl.btnStyle} onClick={onClick}>
      {text}
    </button>
  );
};
