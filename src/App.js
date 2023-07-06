import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// React Context
import { useAuthContext } from "./hooks/useAuthContext";
import { AuthContextProvider } from './context/AuthContext';

import { Dashboard } from "./pages/Dashboard/Dashboard";
import  Bookings from "./pages/Bookings/Bookings";
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
  
  const { authReady } = useAuthContext();
  
  return (
    <BrowserRouter>
      <AppContainer>
        {authReady ? <Sidebar /> : <></>}
        <div className='window-container'>
          {authReady ? <Header /> : <></>}
          <Routes>
            
            <Route
              path="/login"
              element={authReady ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/"
              element={
                authReady ? <Dashboard /> : <Navigate replace to="/login" />
              }
            />
            <Route path="*" element={<ProtectRoute authReady={authReady} />}>
              <Route path="bookings" element={<Bookings />} />
              <Route path="rooms" element={<Rooms />} />
              <Route path="contact" element={<Contact />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Routes>
          
        </div>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;