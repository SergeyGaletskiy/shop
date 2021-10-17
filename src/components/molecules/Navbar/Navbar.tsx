import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import cl from './Navbar.module.css';

export const Navbar = () => {
  const navbarItems = [
    {
      title: `Men's clothing`,
      path: '/men',
      icon: <GiIcons.GiChessKing />,
      id: 1,
    },
    {
      title: `Women's clothing`,
      path: '/women',
      icon: <GiIcons.GiChessQueen />,
      id: 2,
    },
    {
      title: 'Electronics',
      path: '/electronics',
      icon: <GiIcons.GiAwareness />,
      id: 3,
    },
    {
      title: 'Jewelry',
      path: '/jewelry',
      icon: <GiIcons.GiCrystalShine />,
      id: 4,
    },
    {
      title: 'Other',
      path: '/other',
      icon: <GiIcons.GiAutomaticSas />,
      id: 5,
    },
  ];

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={cl.navbar}>
        <Link to="#" className={cl.menuBars}>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={sidebar ? `${cl.navMenu} ${cl.active}` : cl.navMenu}>
          <ul className={cl.navMenuItems} onClick={showSidebar}>
            <li className={cl.navbarToggle}>
              <Link to="#">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {navbarItems.map((item) => (
              <li key={item.id} className={cl.navText}>
                <Link to={item.path} className={cl.navLink}>
                  {item.icon}
                  <span className={cl.navItemTitle}>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
