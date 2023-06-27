import React, { createContext, useState } from 'react';
import { LoginService } from './LoginService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('accessToken') !== null);
  const [role, setRole] = useState(localStorage.getItem('role') || '');

  const handleLogin = async (username, password) => {
    const response = await LoginService.login(username, password);

    localStorage.setItem('accessToken', response.accessToken);
    localStorage.setItem('role', response.role);

    setIsLoggedIn(true);
    setRole(response.role);

  };

  const handleLogout = async () => {
    try{
        await LoginService.logout();
        localStorage.removeItem('accessToken');
        localStorage.removeItem('role');
        setIsLoggedIn(false);
        setRole('');
        window.location.href = '/login';
    }
    catch(error){
        console.error('Logout error:', error);
    }

  };

  const isAdmin = role === 'admin';
  const isManager = role === 'manager';
  const isCustomer = role === 'customer';

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, isAdmin, isManager, isCustomer, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
