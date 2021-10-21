import React from 'react';
import cl from './Footer.module.css';
import logoImg from './credit-cards.png';

export const Footer = () => {
  return (
    <div className={cl.container}>
      <div className={cl.creditCards}>
        <img src={logoImg} alt="logoImage" />
      </div>
      <p className={cl.text}>
        You are already famous, just put your best clothes on.
      </p>
      <p className={cl.text}>2021 All rights reserved</p>
    </div>
  );
};
