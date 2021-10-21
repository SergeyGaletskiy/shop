import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from './logo-image.png';
import cl from './LogoImage.module.css';

export const LogoImage = () => {
  return (
    <div className={cl.logoImage}>
      <Link to={'../'}>
        <img src={logoImg} alt="logoImage" />
      </Link>
    </div>
  );
};
