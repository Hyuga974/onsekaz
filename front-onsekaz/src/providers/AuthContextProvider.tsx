import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import AuthContext, { AuthContextType } from '../context/AuthContext';

type AuthContextProviderProps = {
    children: React.ReactNode;
};

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This effect runs when the component mounts and checks for the existence of the JWT token
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('http://localhost:3000/auth/status', {
          credentials: 'include', // to send the cookies with the request
        });
        const data = await response.json();
        setIsLoggedIn(data.isLoggedIn);
      } catch (error) {
        // If an error occurs (like a 401 or 403 response), consider the user not logged in
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  const logoutHandler = async () => {
    console.log('logout handler');
    setIsLoggedIn(false);
    // remove the cookie
    await fetch('http://localhost:3000/auth/logout', {
        method: 'POST',
        credentials: 'include',
    });
    Cookies.remove('access_token');  // Remove the token from the cookies
    //window.location.href = '/';
  };

  const loginHandler = (email: string, password: string) => {
    console.log('loginHandler', email, password);
    setIsLoggedIn(true);
    console.log('loginHandler: -- ', isLoggedIn);
  };

  const authContextValue: AuthContextType = {
    isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler,
  };

  return (
    <AuthContext.Provider
      value={authContextValue}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
