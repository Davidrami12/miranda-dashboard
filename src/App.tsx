import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// React Context
import { useAuthContext } from "./hooks/useAuthContext";

// Import pages
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Bookings } from "./pages/Bookings/Bookings";
import { SingleBooking } from "./pages/Bookings/BookingsDetail";
import { EditBooking } from "./pages/Bookings/EditBooking";
import { NewBooking } from "./pages/Bookings/NewBooking";
import { Rooms } from "./pages/Rooms/Rooms";
import { SingleRoom } from "./pages/Rooms/RoomsDetail";
import { NewRoom } from "./pages/Rooms/NewRoom";
import { EditRoom } from "./pages/Rooms/EditRoom";
import { Users } from "./pages/Users/Users";
import { SingleUser } from "./pages/Users/UsersDetail";
import { EditOwnUser } from "./pages/Users/EditOwnUser";
import { EditUser } from "./pages/Users/EditUser";
import { NewUser } from "./pages/Users/NewUser";
import { Contact } from "./pages/Contact/Contact";
import { Login } from "./pages/Login/Login";

// Main app components
import { Sidebar } from './components/sidebar/Sidebar';
import { Header } from './components/header/Header';
import { ProtectRoute } from "./router/ProtectedRoute";
import { AppContainer, WindowContent} from "./components/styled/AppContainer";

function App() {
  
  const { authReady } = useAuthContext();
  
  return (
    <BrowserRouter>
      <AppContainer>
        {authReady ? <Sidebar /> : <></>}
        <WindowContent>
          {authReady ? <Header /> : <></>}
          <Routes>
            
            <Route
              path="/login"
              element={authReady ? <Navigate to="/" /> : <Login />}
            />

            <Route
              path="/"
              element={
                authReady ? <Dashboard /> : <Navigate to="/login" replace/>
              }
            />

            <Route path="*" element={<ProtectRoute authReady={authReady} />}>
              
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<SingleBooking />} />
              <Route path="editBooking/:bookingId" element={<EditBooking />} />
              <Route path="newBooking" element={<NewBooking />} />

              <Route path="rooms" element={<Rooms />} />
              <Route path="rooms/:roomId" element={<SingleRoom />} />
              <Route path="editRoom/:roomId" element={<EditRoom />} />
              <Route path="newRoom" element={<NewRoom />} />

              <Route path="users" element={<Users />} />
              <Route path="editOwnUser" element={<EditOwnUser />} />
              <Route path="newUser" element={<NewUser />} />
              <Route path="editUser/:id" element={<EditUser />} />
              <Route path="users/:id" element={<SingleUser />} />

              <Route path="contact" element={<Contact />} />

            </Route>

          </Routes>

        </WindowContent>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;