import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {  
  const [token, setToken] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  const getTokenInLocalStorage = () => {
    return localStorage.getItem('token');
  }

  const setTokenInLocalStorage = (token) => {
    localStorage.setItem('token', token);
    setIsAuth(true);
  }

  const removeTokenInLocalStorage = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
  }

  useEffect(() => {
    const token = getTokenInLocalStorage();
    if (token) setIsAuth(true);
  }, []);
  
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      getTokenInLocalStorage,
      setTokenInLocalStorage,
      removeTokenInLocalStorage,
    }}>
      { props.children }
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;
