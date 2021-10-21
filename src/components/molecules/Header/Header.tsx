import React, { useState } from 'react';
import cl from './Header.module.css';
import { Navbar } from '../Navbar';
import { AuthNav } from '../AuthNav';
import { Cart } from '../../atoms/Cart';
import { LogoImage } from '../../atoms/LogoImage';

export const Header = () => {
  const [visibleCart, setVisibleCart] = useState(false);

  return (
    <>
      <div className={cl.container}>
        <Navbar />
        <LogoImage />
        <AuthNav />
        <Cart onClick={() => setVisibleCart(!visibleCart)} />
      </div>
      {visibleCart ? <div>Корзина</div> : ''}
    </>
  );
};
