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
    contactReducer: sliceContact
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch