import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";
import { fetchAPI } from "./fetchAPI";
import type { RoomInterface } from "../interfaces/RoomInterface";

interface RoomState {
  roomsList: RoomInterface[] | [];
  singleRoom: RoomInterface | null | undefined;
  status: "idle" | "loading" | "success" | "failed";
  singleRoomStatus: "idle" | "loading" | "success" | "failed";
}

interface ActionInterface {
  type: string;
  payload: any;
}

const initialState: RoomState = {
  roomsList: [],
  status: "idle",
  singleRoom: null,
  singleRoomStatus: "idle",
};



const addDelay = <T>(promise: Promise<T>, delay: number): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      promise.then(resolve).catch(reject);
    }, delay);
  });
};

export const getDataRooms = createAsyncThunk(
  "rooms/fetchRooms", 
  async () => {
    return await fetchAPI("/rooms", "GET", null);
});

export const getRoom = createAsyncThunk(
  "room/GetRoomDetails",
  async (id: string) => {
    if (!id) {
      throw new Error("Room ID is not defined.");
    }

    const roomData = await fetchAPI(`/rooms/${id}`, "GET", null);
    
    if (!roomData) {
      throw new Error("Room not found.");
    }

    return roomData;
  }
);

export const createNewRoom = createAsyncThunk(
  "rooms/CreateRoom",
  async (newRoom: RoomInterface) => {
    return await fetchAPI(`/rooms/`, "POST", newRoom);
  }
);

export const editRoom = createAsyncThunk(
  "rooms/EditRoom",
  async (currentRoom: any) => {
    return await fetchAPI(`/rooms/${currentRoom._id}`, "PUT", currentRoom);
  }
);

export const deleteRoom = createAsyncThunk(
  "rooms/DeleteRooms",
  async (id: string) => {
    return await fetchAPI(`/rooms/${id}`, "DELETE", null);
  }
);



export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataRooms.pending, (state: RoomState) => {
        state.status = "loading";
      })
      .addCase(
        getDataRooms.fulfilled,
        (state: RoomState, action: ActionInterface) => {
          state.status = "success";
          state.roomsList = action.payload;
        }
      )
      .addCase(getDataRooms.rejected, (state: RoomState, action) => {
        state.status = "failed";
        console.error("Not possible to fetch the rooms");
        console.log(action.error.message);
      });

    builder
      .addCase(getRoom.pending, (state: RoomState) => {
        state.singleRoom = null;
        state.singleRoomStatus = "loading";
      })
      .addCase(
        getRoom.fulfilled, 
        (state: RoomState, action: ActionInterface) => {
          state.singleRoomStatus = "success";
          state.singleRoom = action.payload;
        }
      )
      .addCase(getRoom.rejected, (state: RoomState, action) => {
        state.singleRoomStatus = "failed";
        console.error("Not possible to fetch the room");
        console.log(action.error.message);
      });

    builder.addCase(
      createNewRoom.fulfilled,
      (state: RoomState, action: ActionInterface) => {
        state.roomsList = [...state.roomsList, action.payload];
      }
    );

    builder.addCase(
      deleteRoom.fulfilled,
      (state: RoomState, action: ActionInterface) => {
        state.roomsList = state.roomsList.filter(
          (room) => room.id !== action.payload
        );
      }
    );

    builder.addCase(
      editRoom.fulfilled,
      (state: RoomState, action: ActionInterface) => {
        state.roomsList = state.roomsList.map((room) => {
          return room.id === action.payload.id ? action.payload : room;
        });
        state.singleRoom = null;
      }
    );
  },
});

export default roomsSlice.reducer;