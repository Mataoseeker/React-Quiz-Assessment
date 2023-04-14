import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="">
      <div className=" bg-white p-2 text-white">
        <nav className="m-auto">
          <ul className="flex justify-end">
            <Link to="/">
              <button className="border text-black px-4 py-2 m-2 rounded-lg shadow-xl hover:bg-gray-100">
                Home
              </button>
            </Link>
            <Link to="/quiz">
              <button className="border text-black px-4 py-2 m-2 rounded-lg shadow-xl hover:bg-gray-100">
                Create Quiz
              </button>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="flex justify-center m-20 items-center ">
        <div className=" p-10 text-white md:p-20 rounded-lg shadow-2xl">
          <h1 className="text-5xl font-bold">Welcome to React Quiz App</h1>
          <p className="py-2 text-2xl">This is a simple quiz app made with ReactJS</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
