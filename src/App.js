import './App.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useReducer, useContext, useEffect, useState } from 'react';
import { reduceLogin } from "./context/reduceLogin";
import LoginContext from './context/contextLogin';
//import { AppContainer } from './AppStyled';

import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Bookings } from "./pages/Bookings/Bookings";
//import Guest from "./pages/Bookings/Guest";
import { Rooms } from "./pages/Rooms/Rooms";
//import NewRoom from "./pages/Rooms/NewRoom";
//import Room from "./pages/Rooms/Room";
import { Users } from "./pages/Users/Users";
//import NewUser from './pages/Users/NewUser';
//import User from "./pages/Users/User";
import { Login } from './pages/Login/Login';
import { Contact } from './pages/Contact/Contact';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
//import EditRoom from './pages/Rooms/EditRoom';
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

  const [log, setLog] = useReducer(reduceLogin, { auth: false, email: "" });

  useEffect(() => {
    const localEmail = localStorage.getItem("login");
    if (localEmail) {
      setLog(JSON.parse(localEmail));
    }
  }, []);

  return (
    <LoginContext.Provider value={[log, setLog]}>
      <HashRouter>
        <AppContainer>

          <SetMenu>
            <Sidebar />
          </SetMenu>

          <div className='window-container'>
            <SetMenu>
              <Header />
            </SetMenu>
            <Routes>

              <Route path='/' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path='/login' element={<Login />} />
              <Route path="/bookings" element={<ProtectedRoute><Bookings /></ProtectedRoute>} />
              {/*<Route path='/bookings/:idguest' element={<ProtectedRoute><Guest /></ProtectedRoute>} />/>*/}
              <Route path='/rooms' element={<ProtectedRoute><Rooms /></ProtectedRoute>} />
              {/*<Route path='/rooms/newroom' element={<ProtectedRoute><NewRoom /></ProtectedRoute>} />*/}
              {/*<Route path="/rooms/:idroom" element={<ProtectedRoute><Room /></ProtectedRoute>} />*/}
              {/*<Route path="/rooms/editroom/:idroom" element={<ProtectedRoute><EditRoom /></ProtectedRoute>} />/>*/}
              <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
              <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
              {/*<Route path="/users/newuser" element={<ProtectedRoute><NewUser /></ProtectedRoute>} />/>*/}
              {/*<Route path="/users/:iduser" element={<ProtectedRoute><User /></ProtectedRoute>} />/>*/}
              <Route path="*" element={<Dashboard />} />

            </Routes>
          </div>
        </AppContainer>
      </HashRouter>
    </LoginContext.Provider>
  );
}

const ProtectedRoute = ({ children }) => {
  const [log] = useContext(LoginContext);
  
  return log.auth ? children : <Navigate to="/login" />;
};

const SetMenu = ({ children }) => {
  const [log,] = useContext(LoginContext);

  return log.auth ? children : null;
}

export default App;
