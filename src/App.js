import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Bookings } from "./pages/Bookings/Bookings";
import { Rooms } from "./pages/Rooms/Rooms";
import { Users } from "./pages/Users/Users";
import { Login } from './pages/Login/Login';
import { Contact } from './pages/Contact/Contact';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { styled } from 'styled-components';

import { ProtectRoute } from "./components/ProtectedRoute ";

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

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setAuth(true);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <AppContainer>
          {auth ? <Sidebar /> : <></>}

          <div className='window-container'>
            {auth ? <Header setAuth={setAuth} /> : <></>}

            <Routes>
              <Route
                path="/login"
                element={
                  auth ? (
                    <Navigate to="/" />
                  ) : (
                    <Login auth={auth} setAuth={setAuth} />
                  )
                }
              />
              <Route
                path="/"
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
