import React from 'react';
import cl from './SingleItemTitle.module.css';

interface ISingleItemTitle {
  title: string;
}

export const SingleItemTitle = ({ title }: ISingleItemTitle) => {
  return <p className={cl.itemTitle}>{title}</p>;
};
