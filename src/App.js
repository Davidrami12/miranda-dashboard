import './App.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useReducer, useContext, useEffect, useState } from 'react';
import { reduceLogin } from "./context/reduceLogin";
import LoginContext from './context/contextLogin';

import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Bookings } from "./pages/Bookings/Bookings";
import { Rooms } from "./pages/Rooms/Rooms";
import { Users } from "./pages/Users/Users";
import { Login } from './pages/Login/Login';
import { Contact } from './pages/Contact/Contact';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { styled } from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    background-color: #F8F8F8;
    .window-container{
        width: 100%;
        min-height: 100vh;
    }
`;

function App() {

  return (
    <>
      <HashRouter>
        <AppContainer>

          <>
            <Sidebar />
          </>

          <div className='window-container'>
            <>
              <Header />
            </>
            <Routes>
              <Route path='/login' element={<Login />} />

              <Route path='/' element={<Dashboard />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path='/rooms' element={<Rooms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/users" element={<Users />} />
              <Route path="*" element={<Dashboard />} />

            </Routes>
          </div>
        </AppContainer>
      </HashRouter>
    </>
  );
}

export default App;
