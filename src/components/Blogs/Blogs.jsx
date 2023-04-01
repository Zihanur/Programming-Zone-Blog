import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Blog from "./Blog/Blog";
import "./Blogs.css";
import Sitecart from "./Sitecart/Sitecart";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [count, setCount] = useState(0);
  const [titleTotal, setTitleTotal] = useState([]);

  //data load
  useEffect(() => {
    fetch("knowledge.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  //read total time function
  const readTimeHandel = (readTime) => {
    const totalReadTime = totalTime + readTime;
    setTotalTime(totalReadTime);
  };

  //added bookmark function
  const addBookmarkHandel = (title) => {
    setCount(count + 1);
    const newTitleTotal = [...titleTotal, title];

    //title check match or not matck
    const titleMatch = titleTotal.find(item=>item==title)
    console.log(titleMatch)
    if (titleMatch) {
      setTitleTotal(newTitleTotal);
      toast.warning("Warning, Already added"); 
    } else {
      setTitleTotal(newTitleTotal);
      toast.success("Success, Added Bookmark");
    }
  };

  return (
    <div>
      <div className="mx-5 md:mx-10 lg:mx-28 grid gap-x-6 sl:grid-cols-1 md:grid-cols-5">
        <div className="col-span-3">
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              readTimeHandel={readTimeHandel}
              addBookmarkHandel={addBookmarkHandel}
            ></Blog>
          ))}
        </div>
        <div className="col-span-2">
          <Sitecart
            totalTime={totalTime}
            count={count}
            titleTotal={titleTotal}
          ></Sitecart>
        </div>
      </div>

      <h2 className="mx-5 md:mx-10 lg:mx-28 text-3xl font-bold">
        Helpful Blog<small> (Click the questions)</small>
      </h2>
      <div className="mx-5 md:mx-10 lg:mx-28 my-4">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-2xl text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Props vs state
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p className="text-xl">
              In web development, props and state are both ways to manage data
              in a React component. Props, short for properties, are data that
              are passed down from a parent component to a child component as
              read-only values. They are used to customize or configure a
              component, and once passed, cannot be modified by the child
              component. State, on the other hand, is a way to store and manage
              data within a component. It is used to keep track of changes in a
              component's data over time, and can be updated by the component
              itself through the use of setState method. When state data
              changes, React will re-render the component with the updated data.
              In general, props are used to pass data from a parent component to
              a child component, while state is used to manage data within a
              component itself. However, the line between props and state can
              sometimes be blurry, and it ultimately depends on the specific use
              case of the component.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-2xl text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            How does useState work?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p className="text-xl">
              In React, useState is a hook that allows a functional component to
              manage state. The useState hook is imported from the 'react'
              module and takes an initial value as its argument, and returns an
              array with two values: The first value is the current state value,
              which is initialized with the initial value provided. The second
              value is a function that can be used to update the state value. In
              the above code, the useState hook is called with an initial value
              of 0, which sets the initial state of the count variable to 0. The
              setCount function is used to update the count state value whenever
              the button is clicked. When the button is clicked, the increment
              function is called, which calls setCount with the updated count
              value. React then re-renders the component with the updated state
              value, causing the count to be incremented by 1 and displayed on
              the screen.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-2xl text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Props vs state
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p className="text-xl">
              In web development, props and state are both ways to manage data
              in a React component. Props, short for properties, are data that
              are passed down from a parent component to a child component as
              read-only values. They are used to customize or configure a
              component, and once passed, cannot be modified by the child
              component. State, on the other hand, is a way to store and manage
              data within a component. It is used to keep track of changes in a
              component's data over time, and can be updated by the component
              itself through the use of setState method. When state data
              changes, React will re-render the component with the updated data.
              In general, props are used to pass data from a parent component to
              a child component, while state is used to manage data within a
              component itself. However, the line between props and state can
              sometimes be blurry, and it ultimately depends on the specific use
              case of the component.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-2xl text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Props vs state
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p className="text-xl">
              In web development, props and state are both ways to manage data
              in a React component. Props, short for properties, are data that
              are passed down from a parent component to a child component as
              read-only values. They are used to customize or configure a
              component, and once passed, cannot be modified by the child
              component. State, on the other hand, is a way to store and manage
              data within a component. It is used to keep track of changes in a
              component's data over time, and can be updated by the component
              itself through the use of setState method. When state data
              changes, React will re-render the component with the updated data.
              In general, props are used to pass data from a parent component to
              a child component, while state is used to manage data within a
              component itself. However, the line between props and state can
              sometimes be blurry, and it ultimately depends on the specific use
              case of the component.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
