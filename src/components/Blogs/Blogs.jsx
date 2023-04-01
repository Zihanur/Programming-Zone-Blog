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
    //toast success and warning
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
            1. Props vs state
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <div className="text-xl">
              In the React, Props and State are use for data pass one component to other components.
              <p>Props: Props can get initial value from parent component. Data change by parent component. Can set default value inside the component. Can't change data in the child component.</p>
              <p>State: State can get initial value from parent component. Can't data change by parent component. Can set default value inside the component. Can't change data in the child component.</p>
            </div>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-2xl text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            2. How does useState work?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p className="text-xl">
              UseState: useState is a react hook and normaly a variable. It's contain present condition in the component. UseState set value and change the value in the function. Look like:
              const [value, setValue] = useState(0); Here, "value" is a variable and her value is define 0. "setValue" is a function that change the value 0 to somethings.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-2xl text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          3. Purpose of useEffect other than fetching data.
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p className="text-xl">
              UseEffect: useEffect is a react hook. It's used for fetching data and hendle side effect. Look like:
              useEffect(callback function,dependency); Here, "Callback function" load the data in API and other work. "Dependency" can recall the useEffect.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-2xl text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            4. How Does React work?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <div className="text-xl">
              React: React is JavaScript Library that build only for User Interface(UI). React work reassign components bassed their state and props. React work:
              <p>
                JavaScript XML: JSX used lool like HTML write in the JavaScript. Some rule of JSX- If write multiple element in the JSX then use "div" tag. Class name should be written like "className". Every tag should be closed.
              </p>
              <p>
                Component: Components are the fundation of user interface. In the react every pices of UI is a components. Rule- Components name are should be start by capital later. Every components are return JSX.
              </p>
              <p>
                Props, State: They are use for data transfer one component to others components. 
              </p>
              <p>Hooks: React have some hooks. Such as useEffect, useState, etc. They are alow functional components and work here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
