// React
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { createNewRoom } from "../../features/roomsSlice";

// Components
import RoomForm from "../../components/rooms/RoomForm";

// TypeScript
import { useAppDispatch } from "../../app/hooks";
import { RoomInterface } from "../../interfaces/RoomInterface";


export const NewRoom = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formTitle: string = "Adding a new room";
  const [currentRoom, setCurrentRoom] = useState<RoomInterface>({
    id: String(Math.floor(Math.random() * 100000)),
    room_number: "",
    bed_type: "",
    photo: "",
    photoTwo: "",
    photoThree: "",
    photoFour: "",
    photoFive: "",
    description: "",
    discountPercent: "",
    room_rate: "",
    discount: "",
    room_offer: "",
    cancellationPolicy: "",
    room_status: "",
    room_facilities: [],
  });

  const handleInput = (event: any): void => {
    const { name, value, type, checked } = event.target;
    let valToUpdate: string | string[];
    if (type === "checkbox") {
      const newVal: string[] = [...currentRoom.room_facilities];
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
    setCurrentRoom((prevState) => ({ ...prevState, [name]: valToUpdate }));
  };

  const handleCancel = (e: Event): void => {
    e.preventDefault();
    navigate("/rooms");
  };

  const handleSubmit = (): void => {
    dispatch(createNewRoom(currentRoom));
    navigate("/rooms");
  };
  
  return (
    <RoomForm
      formTitle={formTitle}
      currentRoom={currentRoom}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};