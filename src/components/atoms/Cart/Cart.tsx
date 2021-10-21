import React from 'react';
import cl from './Cart.module.css';
import * as AiIcons from 'react-icons/ai';

interface ICart {
  onClick?: (e: any) => void;
}

export const Cart = ({ onClick }: ICart) => {
  return (
    <div className={cl.container} onClick={onClick}>
      <AiIcons.AiOutlineShoppingCart />
    </div>
  );
};
