import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";
import type { ReviewInt } from "../interfaces/ContactInterface";

interface ReviewState {
  reviewsList: ReviewInt[] | [];
  status: string;
}

interface ActionInt {
  type: string;
  payload: any;
}

export const getDataReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async () => {
    return await fetchData("Reviews");
  }
);

const initialState = {
  reviewsList: [],
  status: "loading",
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataReviews.pending, (state: ReviewState) => {
        state.status = "loading";
      })
      .addCase(
        getDataReviews.fulfilled,
        (state: ReviewState, action: ActionInt) => {
          state.status = "success";
          state.reviewsList = action.payload;
        }
      )
      .addCase(getDataReviews.rejected, (state: ReviewState) => {
        state.status = "failed";
        console.error("Not possible to fetch the reviews");
      });
  },
});

export default reviewsSlice.reducer;