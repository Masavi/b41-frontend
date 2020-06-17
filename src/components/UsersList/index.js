import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';

const UsersList = () => {
  const { isAuth, getTokenInLocalStorage } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const authorization = `Bearer ${getTokenInLocalStorage()}`;
    axios({
      method: 'get',
      url: 'https://cinta-negra-backend.herokuapp.com/api/v1/users',
      headers: {
        "Authorization": authorization,
      }
    })
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!isAuth) return <Redirect to="/login" />

  const renderUsers = () => {
    if (users.length === 0) return <h2>Cargando...</h2>
    if (users.length > 0) {
      return users.map((user) => <h3>{user.email}</h3>)
    }
  }

  return ( 
    <React.Fragment>
      <h1>Lista de Usuarios</h1>
      { renderUsers() }
    </React.Fragment>
   );
}
 
export default UsersList;