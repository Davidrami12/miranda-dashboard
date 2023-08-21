// React
import React, { useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getRoom, editRoom, getDataRooms } from "../../features/roomsSlice";

// Components
import RoomForm from "../../components/rooms/RoomForm";
import { Loader } from "../../components/styled/Loader";
import { Notification } from "../../components/notification/Notification";
import { BsBookmarkDashFill } from "react-icons/bs"


// TypeScript
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RoomInterface } from "../../interfaces/RoomInterface";

type RoomsType = {
  singleRoom: RoomInterface | null | undefined;
};

export const EditRoom = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { roomId } = params;
  const { singleRoom } = useAppSelector<RoomsType>(
    (state) => state.roomsReducer
  );

  const [currentRoom, setCurrentRoom] = useState<RoomInterface | any>(null);
  
  const formTitle: ReactNode = (
    <span style={{ display: 'inline-block', borderBottom: '4px solid #135846' }}>
      <BsBookmarkDashFill style={{width: 28, height: 28, marginRight: 10}}/>
      Edit current room
    </span>
  );

  useEffect(() => {
    if(roomId){
      dispatch(getRoom(roomId));
    }
  }, [dispatch, roomId]); // Removed singleRoom from the dependency array

  // Set currentRoom whenever singleRoom changes, but only if singleRoom is not null
  useEffect(() => {
    if (singleRoom) {
      setCurrentRoom(singleRoom);
    }
  }, [singleRoom]);

  const handleInput = (event: any) => {
    const { name, value, type, checked } = event.target;
    let valToUpdate: string | string[];
    if (type === "checkbox") {
      const newVal = [...currentRoom[name]];
      if (checked) {
        newVal.push(value);
      } else {
        const index = newVal.indexOf(value);
        newVal.splice(index, 1);
      }
      valToUpdate = newVal;
    } else {
      valToUpdate = value;
    }
    setCurrentRoom((prevState: RoomInterface) => ({
      ...prevState,
      [name]: valToUpdate,
    }));
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentRoom({});
    navigate("/rooms");
  };

  const handleSubmit = async (): Promise<void> => {
    await dispatch(editRoom(currentRoom)).then(() => {
      dispatch(getDataRooms());
      setCurrentRoom({});
    });    
    navigate("/rooms");
    Notification("Room was edited successfully", "success")
  };

  return !currentRoom ? (
    <Loader />
  ) : (
    <RoomForm
      formTitle={formTitle}
      currentRoom={currentRoom}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};