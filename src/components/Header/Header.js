import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  const navPages = [
    {
      id: 1,
      to: '/',
      name: 'Home',
    },
    {
      id: 2,
      to: '/units',
      name: 'Units',
    },
  ];

  const handleActivity = ({ isActive }) => {
    return isActive ? 'active-nav' : '';
  };

  return (
    <div className='header'>
      <nav className='header__nav'>
        <ul>
          {navPages.map((page) => (
            <li key={page.id}>
              <NavLink className={handleActivity} to={page.to}>
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
