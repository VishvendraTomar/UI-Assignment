import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

const MainRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    console.log('Authentication flag retrieved from localStorage:', isAuthenticated);
    if (isAuthenticated === 'true') {
      setIsAuth(true);
    }
  }, []);

  console.log('isAuth:', isAuth);

  return (
    <Routes>
      <Route path='/' element={isAuth ? <Homepage /> : <Navigate to='/login' />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
    </Routes>
  );
};

export default MainRoutes;
