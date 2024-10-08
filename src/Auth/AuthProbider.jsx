import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  // Check for the token and user in cookies/localStorage on initial load
  const fetchAuthData = () => {
    const storedToken = document.cookie
      .split("; ")
      .find(row => row.startsWith("token="))
      ?.split("=")[1];

    const storedUser = localStorage.getItem("user");

    setUser(JSON.parse(storedUser));
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false); 
  };
  useEffect(() => {
    fetchAuthData();
  }, []);

  // Login function
  const login = async (email, password) => {
    const userData = { email, password };
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (data.success) {
        document.cookie = `token=${data.token}; path=/;`;
        localStorage.setItem("user", JSON.stringify(data.user));
        setToken(data.token);
        setUser(data.user);
        navigate('/');
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  // Logout function
  const logout = () => {
    document.cookie = "token=; path=/; max-age=0";
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  // Helper to check if user is authenticated
  const isAuthenticated = !!token;

  if (loading) {
    return <div>Loading...</div>;  
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
