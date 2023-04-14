import React from 'react';
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600">Oops! Page not found.</p>
      <Link to="/" className="mt-8 py-3 px-6 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 ease-in-out">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
