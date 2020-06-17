import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {  
  const [token, setToken] = useState('');

  const getTokenInLocalStorage = () => {
    return localStorage.getItem('token');
  }

  const setTokenInLocalStorage = (token) => {
    localStorage.setItem('token', token);
  }

  const removeTokenInLocalStorage = () => {
    localStorage.removeItem('token');
  }
  
  return (
    <AuthContext.Provider value={{
      token,
      setToken,
      getTokenInLocalStorage,
      setTokenInLocalStorage,
      removeTokenInLocalStorage,
    }}>
      { props.children }
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;
