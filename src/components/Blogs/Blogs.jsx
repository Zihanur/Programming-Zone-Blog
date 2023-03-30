import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import './Blogs.css';
import Sitecart from './Sitecart/Sitecart';

const Blogs = () => {
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    fetch('knowledge.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])

  return (
    <div className='mx-28 grid gap-x-6 sl:grid-cols-1 md:grid-cols-5'>
      <div className='col-span-3'>
        {
          blogs.map(blog=><Blog blog={blog}></Blog>)
        }
      </div>
      <div className='col-span-2'>
        <Sitecart></Sitecart>
      </div>
    </div>
  );
};

export default Blogs;