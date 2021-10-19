import React from 'react';
import cl from './SingleItemDescription.module.css';

interface ISingleItemPrice {
  description: string;
}

export const SingleItemDescription = ({ description }: ISingleItemPrice) => {
  return <p className={cl.itemDescription}>{description}</p>;
};
