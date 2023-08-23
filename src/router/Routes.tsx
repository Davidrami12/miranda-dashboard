import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// Import pages
import { Login } from "../pages/Login/Login";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Bookings } from "../pages/Bookings/Bookings";
import { SingleBooking } from "../pages/Bookings/BookingsDetail";
import { EditBooking } from "../pages/Bookings/EditBooking";
import { NewBooking } from "../pages/Bookings/NewBooking";
import { Rooms } from "../pages/Rooms/Rooms";
import { SingleRoom } from "../pages/Rooms/RoomsDetail";
import { NewRoom } from "../pages/Rooms/NewRoom";
import { EditRoom } from "../pages/Rooms/EditRoom";
import { Users } from "../pages/Users/Users";
import { SingleUser } from "../pages/Users/UsersDetail";
import { EditOwnUser } from "../pages/Users/EditOwnUser";
import { EditUser } from "../pages/Users/EditUser";
import { NewUser } from "../pages/Users/NewUser";
import { Contact } from "../pages/Contact/Contact";

import { ProtectRoute } from "./ProtectedRoute";

export const AppRoutes = ({ authReady }) => {
  return (
    <Routes>
            
      <Route path="/login" element={authReady ? <Navigate to="/dashboard" /> : <Login />}/>

      <Route path="/" element={<ProtectRoute authReady={authReady} />}>
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="bookings" element={<Bookings />} />
        <Route path="bookings/:id" element={<SingleBooking />} />
        <Route path="editBooking/:bookingId" element={<EditBooking />} />
        <Route path="newBooking" element={<NewBooking />} />

        <Route path="rooms" element={<Rooms />} />
        <Route path="rooms/:roomId" element={<SingleRoom />} />
        <Route path="editRoom/:roomId" element={<EditRoom />} />
        <Route path="newRoom" element={<NewRoom />} />

        <Route path="contact" element={<Contact />} />

        <Route path="users" element={<Users />} />
        <Route path="editOwnUser" element={<EditOwnUser />} />
        <Route path="newUser" element={<NewUser />} />
        <Route path="editUser/:id" element={<EditUser />} />
        <Route path="users/:id" element={<SingleUser />} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" />} /> 
      
    </Routes>
  );
};
