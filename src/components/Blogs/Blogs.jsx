import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import './Blogs.css';
import Sitecart from './Sitecart/Sitecart';

const Blogs = () => {
  const [blogs,setBlogs] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [count, setCount] = useState(0);
  const [titleTotal, setTitleTotal] = useState([]);
  
  useEffect(()=>{
    fetch('knowledge.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])
  
  const readTimeHandel = (readTime) =>{
    const totalReadTime = totalTime + readTime
    setTotalTime(totalReadTime);
  }

  const addBookmarkHandel = (title) =>{
    setCount(count + 1);
    const newTitleTotal = [...titleTotal,title]
    setTitleTotal(newTitleTotal);
    console.log(newTitleTotal);
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
          addBookmarkHandel = {addBookmarkHandel}
          ></Blog>)
        }
      </div>
      <div className='col-span-2'>
        <Sitecart 
          totalTime={totalTime}
          count={count}
          titleTotal={titleTotal} >
        </Sitecart>
      </div>
    </div>
  );
};

export default Blogs;