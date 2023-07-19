// React router
import { Navigate, Outlet } from "react-router-dom";
import React from 'react';

interface ProtectRouteProps {
  auth: boolean;
}

// Checking if auth exists in authContext
export const ProtectRoute: React.FC<ProtectRouteProps> = ({ auth }) => {
  const authReady = window.localStorage.getItem("auth");
  if (authReady === null) return <Navigate to="/login" replace />;
  return (
    <>
      <Outlet />
    </>
  );
};
