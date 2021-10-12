import React from 'react';
import cl from './Header.module.css';
import { Navbar } from '../Navbar';

export const Header = () => {
  return (
    <div className={cl.header}>
      <Navbar />
    </div>
  );
};
