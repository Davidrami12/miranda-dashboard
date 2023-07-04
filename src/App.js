import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// React Context
import { useAuthContext } from "./hooks/useAuthContext";

import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Bookings } from "./pages/Bookings/Bookings";
import { Rooms } from "./pages/Rooms/Rooms";
import { Users } from "./pages/Users/Users";
import { Login } from './pages/Login/Login';
import { Contact } from './pages/Contact/Contact';


import { styled } from 'styled-components';

import { Sidebar } from './components/sidebar/Sidebar';
import { Header } from './components/header/Header';
import { ProtectRoute } from "./components/ProtectedRoute ";
import Layout from "./components/Layout";

const AppContainer = styled.div`
    display: flex;
    background-color: #F8F8F8;
    .window-container{
        width: 100%;
        min-height: 100vh;
    }
`;

function App() {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load auth state from localStorage when the component mounts
  useEffect(() => {
    const { authIsReady } = useAuthContext();

    const authState = localStorage.getItem("auth");
    if (authState) {
      setAuth(true);
    }
    setLoading(false); // Prevents losing the current page from refreshing
  }, []);

  if (loading) {
    return null;  // TODO: Replace this with a loading spinner
  }

  return (
    <>
      <BrowserRouter basename='/miranda-dashboard'>
        <AppContainer>
          {auth ? <Sidebar /> : <></>}

          <div className='window-container'>
            {auth ? <Header setAuth={setAuth} /> : <></>}

            <Routes>

              {/* If user authenticated redirect from login to Dashboard, else show Login */}
              <Route path="/login"
                element={
                  auth ? (
                    <Navigate to="/" />
                  ) : (
                    <Login auth={auth} setAuth={setAuth} />
                  )
                }
              />

              {/* If user is authenticated show Dashboard, else redirect to Login */}
              <Route path="/"
                element={auth ? <Dashboard /> : <Navigate to="/login" replace />}
              />

              <Route path="*" element={<ProtectRoute auth={auth} />}>
                <Route path="bookings" element={<Bookings />} />
                <Route path="rooms" element={<Rooms />} />
                <Route path="contact" element={<Contact />} />
                <Route path="users" element={<Users />} />
              </Route>
            </Routes>
            
          </div>
        </AppContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
