// React
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { createNewRoom } from "../../features/roomsSlice";

// Components
import RoomForm from "../../components/rooms/RoomForm";

export const NewRoom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formTitle = "Adding a new room";
  const [currentRoom, setCurrentRoom] = useState({
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

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;
    let valToUpdate;
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
    setCurrentRoom((prevState) => ({ ...prevState, [name]: valToUpdate }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/rooms");
  };

  const handleSubmit = () => {
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