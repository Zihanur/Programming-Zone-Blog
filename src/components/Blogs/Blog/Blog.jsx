import React from 'react';
import './Blog.css';

const Blog = ({blog}) => {
  const {id,authorName,coverImg,title,authorImg,readTime} = blog;
  return (
    <div className='single-blog'>
      <img className='w-full h-96 rounded-lg' src={coverImg} alt="" />
      <div className='w-full flex items-center justify-between my-8'>
        <div className='flex items-center justify-between'>
          <div>
            <img className=' w-14 h-14 rounded-full mr-6' src={authorImg} alt="" />  
          </div>
          <div>
            <h4 className='font-bold text-2xl'>{authorName}</h4>
            <p className='publish-date font-semibold text-md'>Mar 14 (4 Days ago)</p>
          </div>
        </div>
        <div>
            <p className='read-length text-xl font-medium'>{readTime} min read</p>
          </div>
      </div>
      <h2 className='font-bold	text-4xl mb-4'>{title}</h2>
      <p className='font-semibold	text-xl	text-blue-600 underline mb-9'>Mark as read</p>
      <hr className='hr mb-10'/>
    </div>
  );
};

export default Blog;