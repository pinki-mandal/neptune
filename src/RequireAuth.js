import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from './contexts/AuthContext';

export const RequireAuth = ({ children }) => {

  const { isLogin: { user } } = useAuthContext();
  const location = useLocation();

  return (
    user ? (<Outlet />) : <Navigate to="/login" state={{ from: location }} replace />
  )
}
