import React from 'react';
import './Navigation.scss';

function Navigation() {
  return (
    <div>
      <div className='nav'>
        <div className='logo'>React Web</div>
        <div className='navLinks'>
          <a href='#' className='link'>
            Home
          </a>
          <a href='#' className='link'>
            About
          </a>
          <a href='#' className='link'>
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
