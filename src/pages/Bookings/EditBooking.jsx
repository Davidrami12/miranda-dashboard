// React
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getBooking, editBooking } from "../../features/bookingsSlice";

// Components
import BookingForm from "../../components/bookings/BookingForm";
import { Loader } from "../../components/styled/Loader";

export const EditBooking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { bookingId } = params;
  const { singleBooking } = useSelector((state) => state.bookingsReducer);

  const [currentBooking, setCurrentBooking] = useState(null);
  const formTitle = "Edit current booking";

  useEffect(() => {
    dispatch(getBooking(Number(bookingId)));
  }, [dispatch, bookingId]); // Remove singleBooking from dependency array
  
  // Set currentBooking whenever singleBooking changes, but only if singleBooking is not null
  useEffect(() => {
    if (singleBooking) {
      setCurrentBooking(singleBooking);
    }
  }, [singleBooking]);
  

  const handleInput = (event) => {
    const { name, value } = event.target;
    setCurrentBooking((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setCurrentBooking({});
    navigate("/bookings");
  };

  const handleSubmit = () => {
    dispatch(editBooking(currentBooking));
    setCurrentBooking({});
    navigate("/bookings");
  };
  
  return !currentBooking ? (
    <Loader />
  ) : (
    <BookingForm
      formTitle={formTitle}
      currentBooking={currentBooking}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};