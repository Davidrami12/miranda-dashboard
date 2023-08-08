import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";
import type { BookingInterface } from "../interfaces/BookingInterface";

interface BookingsState {
  bookingsList: BookingInterface[] | [];
  singleBooking: BookingInterface | null | undefined;
  status: "loading" | "success" | "failed";
  singleBookingStatus: "loading" | "success" | "failed";
}
interface ActionInterface {
  type: string;
  payload: any;
}

const initialState: BookingsState = {
  bookingsList: [],
  status: "loading",
  singleBooking: null,
  singleBookingStatus: "loading",
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
    const data = await fetchData("Bookings");
    return addDelay(Promise.resolve(data), 200);
  }
);

export const getBooking = createAsyncThunk(
  "booking/GetBookingDetails",
  async (idBooking: number) => {
    // with local json data:
    // return addDelay(Promise.resolve(idBooking), 200);

    // Code sample:
    const token = localStorage.getItem("auth");
    const apiResquest = fetch(`${process.env.REACT_APP_API_URL}/bookings/${idBooking}`, {
      headers: {
      "Authorization": `Bearer ${token}`
    }}).then((rawResponse) => {
      rawResponse.json().then((jsonResponse) => {
        return jsonResponse.data; 
      })
    });
  }
);


export const createNewBooking = createAsyncThunk(
  "bookings/CreateBooking",
  async (newBooking: BookingInterface) => {
    // return await newBooking;

    /* const token = localStorage.getItem("auth");
    const apiResquest = fetch(`${process.env.REACT_APP_API_URL}/bookings/`, {
      method: "POST",
      body: { newBooking },
      headers: {
      "Authorization": `Bearer ${token}`
    }}).then((rawResponse) => {
      rawResponse.json().then((jsonResponse) => {
        return jsonResponse.data; 
      })
    }); */
  }
);

export const editBooking = createAsyncThunk(
  "bookings/EditBooking",
  async (idBooking: number) => {
    return await idBooking;
  }
);

export const deleteBooking = createAsyncThunk(
  "bookings/DeleteBooking",
  async (id: number) => {
    return await id;;
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
      .addCase(getDataBookings.rejected, (state: BookingsState) => {
        state.status = "failed";
        console.error("Not possible to fetch the bookings");
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
          state.singleBooking = state.bookingsList.find(
            (booking) => booking.id === action.payload
          );
        }
      )
      .addCase(getBooking.rejected, (state: BookingsState) => {
        state.singleBookingStatus = "failed";
        console.error("Not possible to fetch the booking");
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
          (booking) => booking.id !== action.payload
        );
      }
    );

    builder.addCase(
      editBooking.fulfilled,
      (state: BookingsState, action: ActionInterface) => {
        state.bookingsList = state.bookingsList.map((booking) => {
          return booking.id === action.payload.id
            ? action.payload
            : booking;
        });
        state.singleBooking = null;
      }
    );
  },
});

export default bookingsSlice.reducer;