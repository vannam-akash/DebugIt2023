import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // check if user is already logged in
    const userId = localStorage.getItem('userId');
    if (userId) {
        setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (userId) => {
    setIsLoggedIn(true);
    localStorage.setItem("userId", userId);
    navigate(`/users/${userId}`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('userId');
    localStorage.removeItem('isClaimed');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;