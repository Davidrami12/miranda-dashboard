// React
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { createNewBooking } from "../../features/bookingsSlice";

// Components
import BookingForm from "../../components/bookings/BookingForm";

// TypeScript
import { useAppDispatch } from "../../app/hooks";
import { BookingInterface } from "../../interfaces/BookingInterface";

export const NewBooking = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formTitle: string = "Adding a new booking";
  const [currentBooking, setCurrentBooking] = useState<BookingInterface>({
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

  const handleInput = (event: any): void => {
    const { name, value } = event.target;
    setCurrentBooking((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCancel = (e: Event): void => {
    e.preventDefault();
    navigate("/bookings");
  };

  const handleSubmit = (): void => {
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