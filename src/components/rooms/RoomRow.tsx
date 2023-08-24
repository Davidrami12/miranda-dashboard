// React & Router
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { deleteRoom, getDataRooms } from "../../features/roomsSlice";

// Styled Components
import {
  Row,
  RoomNameContainer,
  RoomId,
  RoomNumber,
  DataContainer,
  RoomText,
  RoomPrice,
  RoomStatus,
} from "./RoomRowStyled";
import { DataContainerButton, DropDown, Icon } from "../bookings/BookingRowStyled";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { Notification } from "../notification/Notification";

// TypeScript
import { useAppDispatch } from "../../app/hooks";
import { RoomInterface } from "../../interfaces/RoomInterface";

type RoomsType = {
  singleRoom: RoomInterface | null | undefined;
};

export const RoomRow = ({ room, index }: RoomsType | any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [showOptions, setShowOptions] = useState<boolean>(false);

  const goToSingleRoom = (id: string): void => {
    navigate("/rooms/" + id);
  };

  const editSingleRoom = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ): void => {
    e.preventDefault();
    navigate("/editRoom/" + id);
  };

  const deleteCurrentRoom = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ): void => {
    e.preventDefault();
    dispatch(deleteRoom(id)).then(() => {
      Notification("Room was deleted successfully", "info")
      dispatch(getDataRooms());
    });
  };

  return (
    <Row key={room.id} onClick={() => {
      if (room._id) {
       goToSingleRoom(room._id) 
      }}}>
      <td>
        <RoomNameContainer>
          <img src={room.photo} alt="Room Img" />
          <div>
            <RoomId>#{room._id}</RoomId>
            <RoomNumber>Room Nº. {room.room_number}</RoomNumber>
          </div>
        </RoomNameContainer>
      </td>
      <DataContainer>
        <RoomText>{room.bed_type}</RoomText>
      </DataContainer>
      <DataContainer>
        <RoomText>
          {room.room_facilities.map((facility: string, index: number) => (
            <span key={index}>
              {/* Small logic to include ",", "." and "&" in the right places of the displayed array. */}
              {(index && index !== room.room_facilities.length - 1
                ? ", "
                : "") +
                (index && index === room.room_facilities.length - 1
                  ? " & "
                  : "") +
                facility +
                (index === room.room_facilities.length - 1 ? "." : "")}
            </span>
          ))}
        </RoomText>
      </DataContainer>
      <DataContainer>
        <RoomPrice>
          ${room.room_rate}
          <span> /night</span>
        </RoomPrice>
      </DataContainer>
      <DataContainer>
      <RoomPrice>
        {room.discount === "Yes"
          ? <>
              ${room.room_offer.toFixed(2)}
              <span> /night</span>
            </>
          : <span>No offer available</span>}
      </RoomPrice>
      </DataContainer>
      <td>
        <RoomStatus
          id="testingStatus"
          status={room.room_status === "Available" ? "#5AD07A" : "#E23428"}
        >
          {room.room_status}
        </RoomStatus>
      </td>
      <DataContainerButton>
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
          <DropDown onClick={(e) => e.stopPropagation()}>
          <ul>
            <li>
              <button
                onClick={(e) => {
                  e.stopPropagation();  // prevent event bubbling
                  if (room._id) {
                    editSingleRoom(e, room._id);
                  }
                }}
              >
                <AiOutlineEdit style={{ width: 22, height: 22, marginBottom: -5, marginRight: 5 }}/>
                Edit room
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.stopPropagation();  // prevent event bubbling
                  if (room._id) {
                    deleteCurrentRoom(e, room._id);
                  }
                }}
              >
                <AiOutlineDelete style={{ width: 22, height: 22, marginBottom: -5, marginRight: 5}}/>
                Delete room
              </button>
            </li>
          </ul>
        </DropDown>
        ) : null}
      </DataContainerButton>
    </Row>
  );
};