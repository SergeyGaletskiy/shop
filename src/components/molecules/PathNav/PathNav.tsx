import React from 'react';
import { Link } from 'react-router-dom';
import cl from './PathNav.module.css';

interface IPathNav {
  categoryName: string;
  categoryLink: string;
}

export const PathNav = ({ categoryName, categoryLink }: IPathNav) => {
  return (
    <div className={cl.container}>
      <Link to={'../'} className={cl.pathNavLink}>
        <span className={cl.pathNavText}>MAIN</span>
      </Link>
      <span className={cl.pathNavText}>/</span>
      <Link to={`..${categoryLink}`} className={cl.pathNavLink}>
        <span className={cl.pathNavText}>{categoryName}</span>
      </Link>
    </div>
  );
};
