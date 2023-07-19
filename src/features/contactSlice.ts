import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";
import type { ContactInterface } from "../interfaces/ContactInterface";

interface ReviewState {
  reviewsList: ContactInterface[] | [];
  status: string;
}

interface ActionInterface {
  type: string;
  payload: any;
}

const initialState: ReviewState = {
  reviewsList: [],
  status: "loading",
};



export const getDataReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async () => {
    return await fetchData("Reviews");
  }
);



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
        (state: ReviewState, action: ActionInterface) => {
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