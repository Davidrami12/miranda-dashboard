import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";
import { fetchAPI } from "./fetchAPI";
import type { UserInterface } from "../interfaces/UserInterface";

interface UserState {
  usersList: UserInterface[] | [];
  singleUser: UserInterface | null | undefined;
  status: "idle" | "loading" | "success" | "failed";
  singleUserStatus: "idle" | "loading" | "success" | "failed";
}

const initialState: UserState = {
  usersList: [],
  status: "idle",
  singleUser: null,
  singleUserStatus: "idle",
};

interface ActionInterface {
  type: string;
  payload: any;
}


const addDelay = <T>(promise: Promise<T>, delay: number): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      promise.then(resolve).catch(reject);
    }, delay);
  });
};

export const getDataUsers = createAsyncThunk(
  "users/fetchUsers", 
  async () => {
    return await fetchAPI("/users", "GET", null);
});

export const getUser = createAsyncThunk(
  "user/GetUserDetails", 
  async (id: string) => {
    if (!id) {
      throw new Error("User ID is not defined.");
    }

    const usersData = await fetchAPI(`/users/${id}`, "GET", null);
    
    if (!id) {
      throw new Error("User not found.");
    }

    return usersData;
  }
);

export const createNewUser = createAsyncThunk(
  "users/CreateUser",
  async (newUser: UserInterface) => {
    return await fetchAPI(`/users/`, "POST", newUser);
  }
);

export const editUser = createAsyncThunk(
  "users/EditUser", 
  async (currentUser: any) => {
    return await fetchAPI(`/users/${currentUser._id}`, "PUT", currentUser);
});

export const deleteUser = createAsyncThunk(
  "users/DeleteUser", 
  async (id: string) => {
    return await fetchAPI(`/users/${id}`, "DELETE", null);
});



export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataUsers.pending, (state: UserState) => {
        state.status = "loading";
      })
      .addCase(
        getDataUsers.fulfilled,
        (state: UserState, action: ActionInterface) => {
          state.status = "success";
          state.usersList = action.payload;
        }
      )
      .addCase(getDataUsers.rejected, (state: UserState, action) => {
        state.status = "failed";
        console.error("Not possible to fetch the users");
        console.log(action.error.message);
      });

    builder
      .addCase(getUser.pending, (state: UserState) => {
        state.singleUser = null;
        state.singleUserStatus = "loading";
      })
      .addCase(
        getUser.fulfilled, 
        (state: UserState, action: ActionInterface) => {
          state.singleUserStatus = "success";
          state.singleUser = action.payload;
        }
      )
      .addCase(getUser.rejected, (state: UserState, action) => {
        state.singleUserStatus = "failed";
        console.error("Not possible to fetch the user");
        console.log(action.error.message);
      });

    builder.addCase(
      createNewUser.fulfilled,
      (state: UserState, action: ActionInterface) => {
        state.usersList = [...state.usersList, action.payload];
      }
    );

    builder.addCase(
      deleteUser.fulfilled,
      (state: UserState, action: ActionInterface) => {
        state.usersList = state.usersList.filter(
          (user) => user._id !== action.payload
        );
      }
    );

    builder.addCase(
      editUser.fulfilled,
      (state: UserState, action: ActionInterface) => {
        state.usersList = state.usersList.map((user) => {
          return user.id === action.payload.id ? action.payload : user;
        });
        state.singleUser = null;
      }
    );
  },
});

export default usersSlice.reducer;