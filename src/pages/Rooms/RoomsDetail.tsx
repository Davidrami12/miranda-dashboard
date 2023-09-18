// React & Router
import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Redux
import { getRoom } from "../../features/roomsSlice";

// Styled Components
import { Container } from "../../components/styled/Containers";
import {
  GuestContainer, 
  GuestName,
  BookingID,
  Subcontainer,
  BookingDataContainer,
  BookingDataSubcontainer,
  Title,
  Data,
  Text,
  Divider,
  Facilities,
  SwiperContainer,
  Tag,
  Icon
} from "../Bookings/SingleBookingStyled";
import SingleBookingSwiper from "../../components/bookings/SingleBookingSwiper";
import { Loader } from "../../components/styled/Loader";
import { RiArrowGoBackFill } from "react-icons/ri"

// TypeScript
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RoomInterface } from "../../interfaces/RoomInterface";

type RoomsType = {
  singleRoom: RoomInterface | null | undefined;
};

export const SingleRoom = () => {
  
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { id } = params;
  const { singleRoom } = useAppSelector<RoomsType>(
    (state) => state.roomsReducer
  );
  const [currentRoom, setCurrentRoom] = useState<RoomInterface | any>(singleRoom);

  useEffect(() => {
    if (id) {
      dispatch(getRoom(id));
    }
  }, [id, dispatch]);

  const goBackToUsers = () => {
    navigate(-1);
  }

  if (singleRoom) {
    return (
      <Container style={{ flexDirection: "row" }}>
        <Subcontainer>
          <Icon onClick={goBackToUsers}>
            <RiArrowGoBackFill style={{ width: 30 , height: 30 }}/>
          </Icon>
          <GuestContainer>
            <img
              style={{ width: 150, height: 150 }}
              src={singleRoom.photo}
              alt="Room image"
            />
            <div>
              <GuestName>Room Nr. {singleRoom.room_number}</GuestName>
              <BookingID>ID: {singleRoom._id}</BookingID>
            </div>
          </GuestContainer>
          <BookingDataContainer>
            <BookingDataSubcontainer>
              <Title>Room info</Title>
              <Data>{singleRoom.bed_type}</Data>
            </BookingDataSubcontainer>
            <BookingDataSubcontainer>
              <Title>Room rate</Title>
              <Data>
                ${singleRoom.room_rate}
                <span> /night</span>
              </Data>
            </BookingDataSubcontainer>
          </BookingDataContainer>
          <Divider />
          <BookingDataContainer>
            <BookingDataSubcontainer>
              <Title>Offer available</Title>
              <Data>
                {singleRoom.discount === "" ? "No" : singleRoom.discount}
              </Data>
            </BookingDataSubcontainer>
            <BookingDataSubcontainer>
              <Title>Discount pct.</Title>
              <Data>
                {singleRoom.discount === ""
                  ? "-"
                  : `${singleRoom.discountPercent}%`}
              </Data>
            </BookingDataSubcontainer>
            <BookingDataSubcontainer>
              <Title>Offer price</Title>
              <Data>
                  {singleRoom.discount === "No"
                    ? "Not available"
                    : <>
                        ${Number(singleRoom.room_offer).toFixed(2)}
                        <span> /night</span>
                      </>
                  }
              </Data>
            </BookingDataSubcontainer>
          </BookingDataContainer>
          {singleRoom.cancellationPolicy ? (
            <Text>{singleRoom.cancellationPolicy}</Text>
          ) : (
            <Text>No cancellation policy was specified for this room.</Text>
          )}
          <BookingDataContainer>
            <BookingDataSubcontainer style={{ width: "100%" }}>
              <Title>Facilities</Title>
              <Facilities>
                {singleRoom.room_facilities.map(
                  (facility: string, index: number) => (
                    <div key={index}>{facility}</div>
                  )
                )}
              </Facilities>
            </BookingDataSubcontainer>
          </BookingDataContainer>
        </Subcontainer>
        <Subcontainer style={{ padding: 0 }}>
          <SwiperContainer>
            <Tag currentStatus={singleRoom.room_status} className="tag">
              {singleRoom.room_status}
            </Tag>
            <SingleBookingSwiper
              photos={[
                singleRoom.photo,
                singleRoom.photoTwo,
                singleRoom.photoThree,
                singleRoom.photoFour,
                singleRoom.photoFive,
              ]}
            />
            <div className="roomData">
              <h2>{singleRoom.bed_type}</h2>
              {singleRoom.description ? (
                <p>{singleRoom.description}</p>
              ) : (
                <p>No room description available.</p>
              )}
            </div>
          </SwiperContainer>
        </Subcontainer>
      </Container>
    );
  } else {
    return <Loader/>;
  }
};