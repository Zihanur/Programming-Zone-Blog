import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import './Blogs.css';

const Blogs = () => {
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    fetch('knowledge.json')
    .then(res=>res.json())
    .then(data=>console.log(data))
  },[])

  return (
    <div className='blogs'>
      <Blog></Blog>

    </div>
  );
};

export default Blogs;