import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { Dashboard } from "./Components/Dashboard";
import { AuthProvider } from "./Auth/AuthProbider";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router> 
      <AuthProvider>  
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
