import React from 'react';
import { Link } from 'react-router-dom';
import cl from './AuthNav.module.css';

export const AuthNav = () => {
  const authNavItems = [
    {
      title: 'SIGN IN',
      path: '/auth/login',
      id: 1,
    },
    {
      title: `SIGN UP`,
      path: '/auth/registration',
      id: 2,
    },
  ];
  return (
    <div>
      <ul className={cl.authNavMenuItems}>
        {authNavItems.map((item) => (
          <li key={item.id} className={cl.authNavText}>
            <Link to={item.path} className={cl.authNavLink}>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
