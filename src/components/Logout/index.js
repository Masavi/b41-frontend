import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  const { removeTokenInLocalStorage } = useContext(AuthContext);
  removeTokenInLocalStorage();
  alert('Successful logout');
  return (
    <Redirect to="/login" />
  )
}

export default Logout;