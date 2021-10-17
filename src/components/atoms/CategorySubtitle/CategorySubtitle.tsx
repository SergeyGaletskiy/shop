import React from 'react';
import cl from './CategorySubtitle.module.css';

interface ICategorySubtitle {
  subtitle: string;
}

export const CategorySubtitle = ({ subtitle }: ICategorySubtitle) => {
  return <h2 className={cl.subtitle}>{subtitle}</h2>;
};
