// React router
import { Navigate, Outlet } from "react-router-dom";

export const ProtectRoute = (auth) => {

  // Checking if auth exists in localStorage. If not redirect to /login
  if (!auth.auth) 
    return <Navigate to="/login" replace />;
    
  return (
    <>
      <Outlet />
    </>
  );
};