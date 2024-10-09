import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";  

// Create AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();


  const fetchAuthData = () => {
    const storedToken = Cookies.get("token");  
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
    }
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAuthData();
  }, [token,loading]);

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
        Cookies.set("token", data.token, { expires: 1 }); 
        localStorage.setItem("user", JSON.stringify(data.user));
        setToken(data.token);
        setUser(data.user);
        setLoading(false);
        navigate('/');
      } else {
        console.error(data.message);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  // Logout function
  const logout = () => {
    Cookies.remove("token");  
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    navigate("/signIn");
  };

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

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
