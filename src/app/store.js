import { configureStore } from "@reduxjs/toolkit";
import sliceBookings from "../features/bookingsSlice";
import sliceRooms from "../features/roomsSlice";
import sliceUsers from "../features/usersSlice";
import sliceContact from "../features/contactSlice";

// The current Redux application state lives in an object called the store
export const store = configureStore({
  reducer: {
    bookingsReducer: sliceBookings,
    roomsReducer: sliceRooms,
    usersReducer: sliceUsers,
    contactReducer: sliceContact,
  },
});