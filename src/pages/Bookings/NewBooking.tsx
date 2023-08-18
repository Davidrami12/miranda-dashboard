// React
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { createNewBooking, getDataBookings } from "../../features/bookingsSlice";

// Components
import BookingForm from "../../components/bookings/BookingForm";
import { Notification } from "../../components/notification/Notification";

// TypeScript
import { useAppDispatch } from "../../app/hooks";
import { BookingInterface } from "../../interfaces/BookingInterface";

export const NewBooking = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formTitle: string = "Adding a new booking";
  const [currentBooking, setCurrentBooking] = useState<BookingInterface>({
    //_id: "randomId" + Math.floor(Math.random() * 1000),
    bookingID: Math.floor(Math.random() * 10000),
    orderDate: new Date().toLocaleDateString('es-ES', {
      day : '2-digit',
      month : '2-digit',
      year : 'numeric'
    }),
    userName: "",
    userPicture: "",
    checkIn: new Date().toLocaleDateString('es-ES', {
      day : '2-digit',
      month : '2-digit',
      year : 'numeric'
    }),
    checkOut: new Date().toLocaleDateString('es-ES', {
      day : '2-digit',
      month : '2-digit',
      year : 'numeric'
    }),
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

  const handleSubmit = async (): Promise<void> => {
    await dispatch(createNewBooking(currentBooking)).then(() => {
      dispatch(getDataBookings());
    });
    navigate("/bookings");
    Notification("New booking added successfully!", "success");
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