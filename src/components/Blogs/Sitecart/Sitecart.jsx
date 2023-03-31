import React from 'react';

const Sitecart = ({totalTime, count}) => {
  return (
    <div className='site-cart'>
      <div className='flex items-center justify-center h-20 bg-slate-200 rounded-lg border border-solid border-blue-600 mb-6'>
        <p className='text-blue-600 font-bold	text-2xl'>Spent time on read : {totalTime} min</p>
      </div>
      <div className='p-7 bg-slate-200 rounded-lg font-bold	text-2xl text-black'>
        <p>Bookmarked Blogs : {count}</p>
      </div>
    </div>
  );
};

export default Sitecart;