import React, { useEffect } from 'react';
import cl from './CartIcon.module.css';
import * as AiIcons from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getCartState } from '../../../core/selectors/cartSelector';
import { getCartAction } from '../../../core';

interface ICartIcon {
  onClick?: (e: any) => void;
}

export const CartIcon = ({ onClick }: ICartIcon) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(getCartState);

  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);

  return (
    <div className={cl.container} onClick={onClick}>
      {cartItems.length > 0 ? (
        <div className={cl.quantity}>{cartItems.length}</div>
      ) : (
        ''
      )}
      <AiIcons.AiOutlineShoppingCart />
    </div>
  );
};
