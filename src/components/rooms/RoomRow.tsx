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
  DataContainerButton,
  RoomText,
  RoomPrice,
  RoomStatus,
  DropDown,
} from "./RoomRowStyled";
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
          $
          {room.discount === "Yes"
            ? (
                room.room_rate -
                (room.room_rate * room.discountPercent) / 100
              ).toFixed(2)
            : " - "}
          <span> /night</span>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            viewBox="0 0 48 48"
            onClick={(e) => {
              e.stopPropagation();
              setShowOptions(!showOptions);
            }}
          >
            <path d="M24.05 41.7q-1.25 0-2.125-.875t-.875-2.075q0-1.2.875-2.1.875-.9 2.075-.9 1.25 0 2.1.9.85.9.85 2.1 0 1.2-.85 2.075-.85.875-2.05.875Zm0-14.75q-1.25 0-2.125-.875T21.05 24q0-1.25.875-2.1.875-.85 2.075-.85 1.25 0 2.1.85.85.85.85 2.05 0 1.25-.85 2.125t-2.05.875Zm0-14.7q-1.25 0-2.125-.875T21.05 9.25q0-1.25.875-2.125T24 6.25q1.25 0 2.1.875.85.875.85 2.125t-.85 2.125q-.85.875-2.05.875Z" />
          </svg>
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
                ✏️ Edit room
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
                🗑️ Delete room
              </button>
            </li>
          </ul>
        </DropDown>
        ) : null}
      </DataContainerButton>
    </Row>
  );
};