// React router
import { Navigate, Outlet } from "react-router-dom";

// Checking if auth exists in localStorage. If not redirect to /login. If yes it return the rest of the routes (see App.js)
export const ProtectRoute = (auth) => {
  if (!auth.auth) 
    return <Navigate to="/login" replace />;
    
  return (
    <>
      <Outlet />
    </>
  );
};