import React from 'react';
import cl from './SingleItemPrice.module.css';

interface ISingleItemPrice {
  price: number;
  currency?: string;
}

export const SingleItemPrice = ({
  price,
  currency = '$',
}: ISingleItemPrice) => {
  return <p className={cl.itemPrice}>{price} $</p>;
};
