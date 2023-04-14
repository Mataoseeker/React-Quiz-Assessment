import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import pic1 from "../Images/signupp.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn, user } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    if (!email || !password ) {
      toast.error("All fields are required or Invalid credentials"),
        {
          position: toast.POSITION.TOP_RIGHT,
        };
      return;
    }
    toast.success("Signed in successfully"),
      {
        position: toast.POSITION.TOP_RIGHT,
      };
      
     

    setError("");
    try {
      await signIn(email, password);
      navigate("/quizpage");
    } catch (error) {
      setError(error.message);

      console.log(error.message);
    }
  };

  return (
    <div>
      <nav className="m-auto  bg-white p-2 text-white">
        <ul className="flex justify-end">
          <Link to="/">
            <button className="border text-black px-4 py-2 m-2 rounded-lg shadow-xl hover:bg-gray-100">
              Home
            </button>
          </Link>
          <Link to="/signup">
            <button className="border text-black px-4 py-2 m-2 rounded-lg shadow-xl hover:bg-gray-100">
              Sign Up
            </button>
          </Link>
        </ul>
      </nav>
      <div className="flex justify-between ">
        <div >
          <img className="hidden md:block" src={pic1} />
        </div>
        <div className=" max-w-[100%] mx-auto my-2 md:my-20 p-12">
          <h1 className="text-2xl font-bold py-2">Sign In to your account</h1>
          <p className="py-2">
            Don't have an account?
            <Link to="/signup" className="underline text-blue-900">
              SignUp
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col py-2">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded text-center  "
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col py-2">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded text-center"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <button
              className="border rounded border-blue-400 bg-blue-600
           hover:bg-blue-500 w-full p-2 my-2 text-white"
              type="submit"
            >
              Sign In
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
