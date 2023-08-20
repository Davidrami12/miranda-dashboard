// React
import React, { useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getBooking, editBooking, getDataBookings } from "../../features/bookingsSlice";

// Components
import BookingForm from "../../components/bookings/BookingForm";
import { Loader } from "../../components/styled/Loader";
import { Notification } from "../../components/notification/Notification";
import { BiCalendarEdit } from "react-icons/bi"

// TypeScript
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { BookingInterface } from "../../interfaces/BookingInterface";

type BookingsType = {
  singleBooking: BookingInterface | null | undefined;
};

export const EditBooking = () => {
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { bookingId } = params;
  const { singleBooking } = useAppSelector<BookingsType>(
    (state) => state.bookingsReducer
  );

  const [currentBooking, setCurrentBooking] = useState<BookingInterface | any>(null);
  
  const formTitle: ReactNode  = (
    <span style={{ display: 'inline-block', borderBottom: '4px solid #135846' }}>
      <BiCalendarEdit style={{width: 30, height: 30, marginRight: 10}}/>
      Edit current booking
    </span>
  );

  useEffect(() => {
    if(bookingId){
      dispatch(getBooking(bookingId)); //dispatch(getBooking(Number(bookingId)));
    }
  }, [dispatch, bookingId]); // Remove singleBooking from dependency array
  
  // Set currentBooking whenever singleBooking changes, but only if singleBooking is not null
  useEffect(() => {
    if (singleBooking) {
      setCurrentBooking(singleBooking);
    }
  }, [singleBooking]);

  const handleInput = (event: any) => {
    const { name, value } = event.target;
    setCurrentBooking((prevState: BookingInterface) => ({ ...prevState, [name]: value }));
  };

  const handleCancel = (e: Event): void => {
    e.preventDefault();
    setCurrentBooking({});
    navigate("/bookings");
  };

  const handleSubmit = async (): Promise<void> => {
    await dispatch(editBooking(currentBooking)).then(() => {
      dispatch(getDataBookings());
      setCurrentBooking({});
    });
    navigate("/bookings");
    Notification("Booking was edited successfully", "success")
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