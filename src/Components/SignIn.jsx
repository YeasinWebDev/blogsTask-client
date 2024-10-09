import React, { useEffect, useState } from "react";
import { useAuth } from "../Auth/AuthProbider";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    toast.success("Succesfully logged in!")
  };

  useEffect(() => {
    if (isAuthenticated) {
      return navigate('/')
    }
  }, [isAuthenticated])


  return (
    <div className="flex items-center flex-col justify-start pt-20 bg-[#f2f2f2] h-screen">
      <h2 className="text-3xl font-semibold ">Login</h2>
      <form onSubmit={handleSubmit} className="mt-6 text-white p-6  rounded-xl bg-[#6C5DD3]">
        <div className="form-group my-4 flex items-center justify-start gap-5">
          <label htmlFor="email" className="font-semibold text-xl ">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="font-semibold bg-transparent p-3 border-2 rounded-md"
          />
        </div>
        <div className="form-group my-4 flex items-center justify-start gap-5">
          <label htmlFor="password" className="font-semibold text-xl ">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="font-semibold bg-transparent p-3 border-2 rounded-md"
          />
        </div>
        <button className="p-3 w-full bg-[#4d3cb9] mt-4 rounded-md" type="submit">Login</button>
      <p className="mt-4 flex items-center justify-center gap-3">
        Don't Have Account <Link to={'/signup'} className="font-semibold  text-black text-lg">Sign Up</Link>
      </p>
      </form>
    </div>
  );
};

export default SignIn;
