import { configureStore } from "@reduxjs/toolkit";
import sliceBookings from "../features/bookingsSlice";

// The current Redux application state lives in an object called the store
export const store = configureStore({
  reducer: {
    bookingsReducer: sliceBookings,
  },
});