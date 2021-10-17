import React, { useState } from 'react';
import cl from './Header.module.css';
import { Navbar } from '../Navbar';
import { AuthNav } from '../AuthNav';
import { Cart } from '../../atoms/Cart';

export const Header = () => {
  const [visibleCard, setVisibleCart] = useState(false);

  return (
    <>
      <div className={cl.header}>
        <Navbar />
        <AuthNav />
        <Cart onClick={() => setVisibleCart(!visibleCard)} />
      </div>
      {visibleCard ? <div>Привет</div> : ''}
    </>
  );
};
