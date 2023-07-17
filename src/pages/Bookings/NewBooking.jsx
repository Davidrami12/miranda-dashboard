// React
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { createNewBooking } from "../../features/bookingsSlice";

// Components
import BookingForm from "../../components/bookings/BookingForm";

export const NewBooking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formTitle = "Adding a new booking";
  const [currentBooking, setCurrentBooking] = useState({
    id: Math.floor(Math.random() * 1000),
    bookingID: Math.floor(Math.random() * 10000),
    orderDate: new Date().toLocaleDateString('es-ES', {
      day : '2-digit',
      month : '2-digit',
      year : 'numeric'
    }),
    userName: "",
    userPicture: "",
    checkIn: "",
    checkOut: "",
    specialRequest: "",
    roomType: "",
    status: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setCurrentBooking((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/bookings");
  };

  const handleSubmit = () => {
    dispatch(createNewBooking(currentBooking));
    navigate("/bookings");
  };
  return (
    <BookingForm
      formTitle={formTitle}
      currentBooking={currentBooking}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};