import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";
import type { UserInterface } from "../interfaces/UserInterface";

interface UserState {
  usersList: UserInterface[] | [];
  singleUser: UserInterface | null | undefined;
  status: string;
  singleUserStatus: string;
}

const initialState: UserState = {
  usersList: [],
  status: "loading",
  singleUser: null,
  singleUserStatus: "loading",
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
    const data = await fetchData("Users");
    return addDelay(Promise.resolve(data), 200);
});

export const getUser = createAsyncThunk(
  "user/GetUserDetails", 
  async (id: number) => {
    return await id;
});

export const createNewUser = createAsyncThunk(
  "users/CreateUser",
  async (newUser: UserInterface) => {
    return await newUser;
  }
);

export const editUser = createAsyncThunk(
  "users/EditUser", 
  async (id: number) => {
    return await id;
});

export const deleteUser = createAsyncThunk(
  "users/DeleteUser", 
  async (id: number) => {
    return await id;
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
      .addCase(getDataUsers.rejected, (state: UserState) => {
        state.status = "failed";
        console.error("Not possible to fetch the users");
      });

    builder
      .addCase(getUser.pending, (state: UserState) => {
        state.singleUser = null;
        state.singleUserStatus = "loading";
      })
      .addCase(getUser.fulfilled, (state: UserState, action: ActionInterface) => {
        state.singleUserStatus = "success";
        state.singleUser = state.usersList.find(
          (user) => user.id === action.payload
        );
      })
      .addCase(getUser.rejected, (state: UserState) => {
        state.singleUserStatus = "failed";
        console.error("Not possible to fetch the user");
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
          (user) => user.id !== action.payload
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