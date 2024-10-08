import React, { useState } from "react";
import { useAuth } from "../Auth/AuthProbider";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

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
      </form>
    </div>
  );
};

export default SignIn;
