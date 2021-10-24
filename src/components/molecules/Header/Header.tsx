import React, { useState } from 'react';
import cl from './Header.module.css';
import { Navbar } from '../Navbar';
import { AuthNav } from '../AuthNav';
import { CartIcon } from '../../atoms/CartIcon';
import { LogoImage } from '../../atoms/LogoImage';
import { CartPreview } from '../CartPreview';

export const Header = () => {
  const [visibleCart, setVisibleCart] = useState(false);

  return (
    <>
      <div className={cl.container}>
        <Navbar />
        <LogoImage />
        <AuthNav />
        <CartIcon onClick={() => setVisibleCart(!visibleCart)} />
      </div>
      {visibleCart ? <CartPreview /> : ''}
    </>
  );
};
