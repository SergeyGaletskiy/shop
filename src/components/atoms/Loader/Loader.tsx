import React from 'react';
import cl from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={cl.loader}>
      <div className={cl.loading}>
        <div className={cl.bounceball}></div>
        <div className={cl.text}>LOADING...</div>
      </div>
    </div>
  );
};
