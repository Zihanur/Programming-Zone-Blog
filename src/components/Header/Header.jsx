import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className='header flex items-center justify-between mx-5 md:mx-10 lg:mx-28 mt-12 mb-8'>
      <h1 className='font-bold text-5xl'>Programming Zone</h1>
        <div className='text-2xl flex items-center gap-x-6'> 
          <div className='hidden lg:flex items-center gap-x-5'>
          <button href="">Home</button>
          <button href="" className=''>Blogs</button>
          <button href="">Contact</button>
          </div>
          <img className='w-14 h-14 rounded-full' src="https://img.freepik.com/free-photo/man-isolated-showing-facial-emotions_1303-20261.jpg?w=996&t=st=1680207081~exp=1680207681~hmac=5189b7e90e5ff20c7ceb3fe968031ca754efd09fe06add4914b84785592a79e7" alt="user" />
        </div>
      </div>
      <hr className='hr mx-5 md:mx-10 lg:mx-28 mb-8 text-inherit'/>
    </div>
  );
};

export default Header;