// React router
import { Navigate, Outlet } from "react-router-dom";
import React from 'react';

interface ProtectRouteProps {
  authReady: boolean;
}

// Checking if auth exists in authContext
export const ProtectRoute: React.FC<ProtectRouteProps> = () => {
  const authReady = window.localStorage.getItem("auth");
  if (authReady === null) return <Navigate to="/login" replace />;
  return (
    <>
      <Outlet />
    </>
  );
};
