import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <h1>Knowledge Zone</h1>
      <div className='navs'>
        <a href="">Home</a>
        <a href="">Blogs</a>
        <a href="">Contact</a>
        <a href="">Login</a>
      </div>
    </div>
  );
};

export default Header;