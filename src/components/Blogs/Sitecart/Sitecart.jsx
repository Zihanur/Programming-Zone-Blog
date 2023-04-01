import React from "react";

const Sitecart = ({ totalTime, count, titleTotal }) => {
  return (
    <div className="d-full m-auto">
      <div className="flex items-center justify-center h-20 bg-slate-200 rounded-lg border border-solid border-blue-600 mb-6">
        <p className="text-blue-600 font-bold	text-2xl">
          Spent time on read : {totalTime} min
        </p>
      </div>
      <div className="p-7 bg-slate-200 rounded-lg text-black">
        <p className="font-bold	text-2xl">Bookmarked Blogs : {count}</p>
        <div className="my-6">
          {titleTotal.map((title, index) => (
            <p
              className="bg-white rounded-lg p-5 mb-4 font-semibold text-lg"
              key={index}
            >
              {title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitecart;
