import React from 'react';
import { CategorySubtitle } from '../../components/atoms/CategorySubtitle';
import UnderConstruction from './under-construction.png';
import cl from './OtherGoods.module.css';

export const OtherGoods = () => {
  return (
    <div className={cl.container}>
      <CategorySubtitle subtitle="Other" />
      <img
        className={cl.image}
        src={UnderConstruction}
        alt="under-construction"
      />
    </div>
  );
};
