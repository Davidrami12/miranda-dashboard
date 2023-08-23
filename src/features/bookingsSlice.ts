import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";
import { fetchAPI } from "./fetchAPI";
import type { BookingInterface } from "../interfaces/BookingInterface";

interface BookingsState {
  bookingsList: BookingInterface[] | [];
  singleBooking: BookingInterface | null | undefined;
  status: "idle" | "loading" | "success" | "failed";
  singleBookingStatus: "idle" | "loading" | "success" | "failed";
}

interface ActionInterface {
  type: string;
  payload: any;
}

const initialState: BookingsState = {
  bookingsList: [],
  status: "idle",
  singleBooking: null,
  singleBookingStatus: "idle",
};



const addDelay = <T>(promise: Promise<T>, delay: number): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      promise.then(resolve).catch(reject);
    }, delay);
  });
};

export const getDataBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async () => {
    return await fetchAPI("/bookings", "GET", null);
  }
);

export const getBooking = createAsyncThunk(
  "booking/GetBookingDetails",
  async (id: string) => {
    return await fetchAPI(`/bookings/${id}`, "GET", null);
  }
);


export const createNewBooking = createAsyncThunk(
  "bookings/CreateBooking",
  async (newBooking: BookingInterface) => {
    return await fetchAPI(`/bookings/`, "POST", newBooking);
  }
);

export const editBooking = createAsyncThunk(
  "bookings/EditBooking",
  async (currentBooking: any) => {
    return await fetchAPI(`/bookings/${currentBooking._id}`, "PUT", currentBooking);
  }
);

export const deleteBooking = createAsyncThunk(
  "bookings/DeleteBooking",
  async (idBooking: string) => {
    return await fetchAPI(`/bookings/${idBooking}`, "DELETE", null);
  }
);




export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataBookings.pending, (state: BookingsState) => {
        state.status = "loading";
      })
      .addCase(
        getDataBookings.fulfilled,
        (state: BookingsState, action: ActionInterface) => {
          state.status = "success";
          state.bookingsList = action.payload;
        }
      )
      .addCase(getDataBookings.rejected, (state: BookingsState, action) => {
        state.status = "failed";
        console.error("Not possible to fetch the bookings");
        console.log(action.error.message);
      });

    builder
      .addCase(getBooking.pending, (state: BookingsState) => {
        state.singleBooking = null;
        state.singleBookingStatus = "loading";
      })
      .addCase(
        getBooking.fulfilled,
        (state: BookingsState, action: ActionInterface) => {
          state.singleBookingStatus = "success";
          state.singleBooking = action.payload;
        }
      )
      .addCase(getBooking.rejected, (state: BookingsState, action) => {
        state.singleBookingStatus = "failed";
        console.error("Not possible to fetch the booking");
        console.log(action.error.message);
      });

    builder.addCase(
      createNewBooking.fulfilled,
      (state: BookingsState, action: ActionInterface) => {
        state.bookingsList = [...state.bookingsList, action.payload];
      }
    );

    builder.addCase(
      deleteBooking.fulfilled,
      (state: BookingsState, action: ActionInterface) => {
        state.bookingsList = state.bookingsList.filter(
          (booking) => booking._id !== action.payload
        );
      }
    );

    builder.addCase(
      editBooking.fulfilled,
      (state: BookingsState, action: ActionInterface) => {
        state.bookingsList = state.bookingsList.map((booking) => {
          return booking.id === action.payload.id ? action.payload : booking;
        });
        state.singleBooking = null;
      }
    );
  },
});

export default bookingsSlice.reducer;