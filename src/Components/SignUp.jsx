import React, { useState } from "react";
import { useAuth } from "../Auth/AuthProbider";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // handle form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password, name };

    try {
      const response = await fetch("http://localhost:5000/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();

      if (data.success) {
        login(email, password);
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="signup-container flex items-center flex-col justify-start pt-20 bg-[#f2f2f2] h-screen">
      <h2 className="text-3xl font-semibold ">Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} className="mt-6 text-white p-6  rounded-xl bg-[#6C5DD3]">
        <div className="form-group my-4 flex items-center justify-start gap-5">
          <label htmlFor="name" className="font-semibold text-xl ">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="font-semibold bg-transparent p-3 border-2 rounded-md"
          />
        </div>
        <div className="form-group my-4 flex items-center justify-start gap-5">
          <label htmlFor="email" className="font-semibold text-xl ">Email:</label>
          <input
            type="email"
            id="email"
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
        <button type="submit" className="p-3 w-full bg-[#4d3cb9] mt-4 rounded-md">Sign Up</button>
        <p className="mt-4 flex items-center justify-center gap-3">
          Already Have Account <Link to={'/signin'} className="font-semibold  text-black text-lg">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
