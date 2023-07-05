import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";

const addDelay = (promise, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(promise);
    }, delay);
  });
};

export const getDataBookings = createAsyncThunk(
  "bookings/fetchBookings",
  () => {
    return addDelay(fetchData("Bookings"), 200);
  }
);

export const getBooking = createAsyncThunk(
  "booking/GetBookingDetails",
  async (idBooking) => {
    return await addDelay(idBooking, 200);
  }
);

const initialState = {
  bookingsList: [],
  status: "loading",
  singleBooking: null,
  singleBookingStatus: "loading",
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDataBookings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDataBookings.fulfilled, (state, action) => {
        state.status = "success";
        state.bookingsList = action.payload;
      })
      .addCase(getDataBookings.rejected, (state) => {
        state.status = "failed";
        console.error("Not possible to fetch bookings");
      });

    builder
      .addCase(getBooking.pending, (state) => {
        state.singleBooking = null;
        state.singleBookingStatus = "loading";
      })
      .addCase(getBooking.fulfilled, (state, action) => {
        state.singleBookingStatus = "success";
        state.singleBooking = state.bookingsList.find(
          (booking) => booking.bookingID === action.payload
        );
      })
      .addCase(getBooking.rejected, (state) => {
        state.singleBookingStatus = "failed";
        console.error("Not possible to fetch booking");
      });
  },
});

export default bookingsSlice.reducer;