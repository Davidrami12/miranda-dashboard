// React & Router
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { deleteBooking, editBooking, getBooking, getDataBookings } from "../../features/bookingsSlice";

// Styled Components
import {
  Row,
  DataContainer,
  DataContainerButton,
  GuestContainer,
  GuestName,
  BookingID,
  Status,
  NotesButton,
  DropDown,
  Icon
} from "./BookingRowStyled";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import { Notification } from "../notification/Notification";

// TypeScript
import { useAppDispatch } from "../../app/hooks";
import { BookingInterface, BookingRowInt } from "../../interfaces/BookingInterface";

type BookingsType = {
  singleBooking: BookingInterface | null | undefined;
};

export const BookingRow = ({ booking, handleOpenModal }: BookingRowInt) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [showOptions, setShowOptions] = useState<boolean>(false);

  const goToSingleBooking = (id: string): void => {
    navigate("/bookings/" + id);
  };

  const editSingleBooking = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ): void => {
    e.preventDefault();
    navigate("/editBooking/" + id);
  };

  const deleteCurrentBooking = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ): void => {
    e.preventDefault();
    dispatch(deleteBooking(id)).then(() => {
      Notification("Booking was deleted successfully", "info")
      dispatch(getDataBookings());
    });
  };

  return (
    <Row onClick={() => { 
      if (booking._id) {
        goToSingleBooking(booking._id) 
      }}}>
      <td>
        <GuestContainer>
          <img
            src={booking.userPicture}
            alt="Booking image"
          />
          <div>
            <GuestName>{booking.userName}</GuestName>
            <BookingID>#{booking._id}</BookingID>
          </div>
        </GuestContainer>
      </td>
      <DataContainer className="data-container__text">
        <p>{booking.orderDate}</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>{booking.checkIn}</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>{booking.checkOut}</p>
      </DataContainer>
      <td>
        <NotesButton
          request={booking.specialRequest}
          onClick={(e) => {
            handleOpenModal(booking.userName, booking.specialRequest, e);
          }}
        >
          {booking.specialRequest === "" ? "No Notes" : "View Notes"}
        </NotesButton>
      </td>

      <DataContainer className="data-container__text">
        <p>{booking.roomType}</p>
      </DataContainer>
      <td>
        <Status status={booking.status}>{booking.status}</Status>
      </td>
      <DataContainerButton style={{ position: "relative" }}>
        <button>
          <Icon>
            <PiDotsThreeVerticalBold style={{ height: 30, width: 30}}
              onClick={(e) => {
                if (e && e.stopPropagation) e.stopPropagation();
                setShowOptions(!showOptions);
              }}/>
          </Icon>
        </button>
        {showOptions ? (
          <DropDown>
            <ul>
              <li>
                <button
                  onClick={(e) => {
                    if (e && e.stopPropagation) e.stopPropagation();
                    if (booking._id) {
                      editSingleBooking(e, booking._id);
                    }
                  }}
                >
                  <AiOutlineEdit style={{ width: 20, height: 20, marginBottom: -5, marginRight: 5 }}/>
                  Edit booking
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    if (e && e.stopPropagation) e.stopPropagation();
                    if (booking._id) {
                      deleteCurrentBooking(e, booking._id);
                    }
                  }}
                >
                  <AiOutlineDelete style={{ width: 20, height: 20, marginBottom: -5, marginRight: 5}}/>
                  Delete booking
                </button>
              </li>
            </ul>
          </DropDown>
        ) : null}
      </DataContainerButton>
    </Row>
  );
};