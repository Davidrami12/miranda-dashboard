import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";
import type { RoomInterface } from "../interfaces/RoomInterface";

interface RoomState {
  roomsList: RoomInterface[] | [];
  singleRoom: RoomInterface | null | undefined;
  status: string;
  singleRoomStatus: string;
}

interface ActionInterface {
  type: string;
  payload: any;
}

const initialState: RoomState = {
  roomsList: [],
  status: "loading",
  singleRoom: null,
  singleRoomStatus: "loading",
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
    const data = await fetchData("Rooms");
    return addDelay(Promise.resolve(data), 200);
});

export const getRoom = createAsyncThunk(
  "room/GetRoomDetails",
  async (id: string) => {
    return await id;
  }
);

export const createNewRoom = createAsyncThunk(
  "rooms/CreateRoom",
  async (newRoom: RoomInterface) => {
    return await newRoom;
  }
);

export const editRoom = createAsyncThunk(
  "rooms/EditRoom",
  async (id: string) => {
    return await id;
  }
);

export const deleteRoom = createAsyncThunk(
  "rooms/DeleteRooms",
  async (id: string) => {
    return await id;
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
      .addCase(getDataRooms.rejected, (state: RoomState) => {
        state.status = "failed";
        console.error("Not possible to fetch the rooms");
      });

    builder
      .addCase(getRoom.pending, (state: RoomState) => {
        state.singleRoom = null;
        state.singleRoomStatus = "loading";
      })
      .addCase(getRoom.fulfilled, (state: RoomState, action: ActionInterface) => {
        state.singleRoomStatus = "success";
        state.singleRoom = state.roomsList.find(
          (room) => room.id === action.payload
        );
      })
      .addCase(getRoom.rejected, (state: RoomState) => {
        state.singleRoomStatus = "failed";
        console.error("Not possible to fetch the room");
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