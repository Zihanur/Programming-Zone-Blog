import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import './Blogs.css';
import Sitecart from './Sitecart/Sitecart';

const Blogs = () => {
  const [blogs,setBlogs] = useState([]);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(()=>{
    fetch('knowledge.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])

  
  const readTimeHandel = (readTime) =>{
    const totalReadTime = totalTime + readTime
    setTotalTime(totalReadTime);
  }

  return (
    <div className='mx-28 grid gap-x-6 sl:grid-cols-1 md:grid-cols-5'>
      <div className='col-span-3'>
        {
          blogs.map(blog=>
          <Blog 
          key = {blog.id}
          blog = {blog} 
          readTimeHandel = {readTimeHandel}
          ></Blog>)
        }
      </div>
      <div className='col-span-2'>
        
        <Sitecart totalTime={totalTime}></Sitecart>
      </div>
    </div>
  );
};

export default Blogs;