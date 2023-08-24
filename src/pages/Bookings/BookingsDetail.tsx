// React & Router
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Redux
import { getBooking } from "../../features/bookingsSlice";

// Styled Components
import { Container } from "../../components/styled/Containers";
import {
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
} from "./SingleBookingStyled";
import {
  GuestContainer,
  GuestName,
  BookingID,
} from "../../components/bookings/BookingRowStyled";
import SingleBookingSwiper from "../../components/bookings/SingleBookingSwiper";
import { Loader } from "../../components/styled/Loader";

// TypeScript
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { BookingInterface } from "../../interfaces/BookingInterface";


type BookingsType = {
  singleBooking: BookingInterface | null | undefined;
};

export const SingleBooking = () => {

  const dispatch = useAppDispatch();
  const params = useParams();

  const { id } = params;
  const { singleBooking } = useAppSelector<BookingsType>(
    (state) => state.bookingsReducer
  );
  const [currentBooking, setCurrentBooking] = useState<BookingInterface | any>(singleBooking);

  useEffect(() => {
    if (id) {
      dispatch(getBooking(id));
    }
    console.log(id)
  }, [id, dispatch]);

  if (singleBooking) {
    return (
      <Container style={{ flexDirection: "row" }}>
        <Subcontainer>
          <GuestContainer>
            <img
              style={{ width: 150, height: 150 }}
              src={singleBooking.userPicture}
              alt="User portrait"
            />
            <div>
              <GuestName>{singleBooking.userName}</GuestName>
              <BookingID>ID {singleBooking._id}</BookingID>
            </div>
          </GuestContainer>
          <BookingDataContainer>
            <BookingDataSubcontainer>
              <Title>Check In</Title>
              <Data>{singleBooking.checkIn}</Data>
            </BookingDataSubcontainer>
            <BookingDataSubcontainer>
              <Title>Check Out</Title>
              <Data>{singleBooking.checkOut}</Data>
            </BookingDataSubcontainer>
          </BookingDataContainer>
          <Divider />
          <BookingDataContainer>
            <BookingDataSubcontainer>
              <Title>Room info</Title>
              <Data>{singleBooking.roomType}</Data>
            </BookingDataSubcontainer>
            <BookingDataSubcontainer>
              <Title>Price</Title>
              <Data>
                {/* ${currentBooking.roomRate / 100} */}
                <span> $125 /night</span>
              </Data>
            </BookingDataSubcontainer>
          </BookingDataContainer>

          {singleBooking.specialRequest ? (
            <Text>{singleBooking.specialRequest}</Text>
          ) : (
            <Text>No special request was entered for this booking.</Text>
          )}

          <BookingDataContainer>
            <BookingDataSubcontainer style={{ width: "100%" }}>
              <Title>Facilities</Title>
              <Facilities>
                {/* {currentBooking.roomFacilities.map(
                  (facility: string, index: number) => (
                    <div key={index}>{facility}</div>
                  )
                )} */}
              </Facilities>
            </BookingDataSubcontainer>
          </BookingDataContainer>
        </Subcontainer>
        <Subcontainer style={{ padding: 0 }}>
          {/* <SwiperContainer>
            <Tag currentStatus={singleBooking.status} className="tag">
              {singleBooking.status}
            </Tag>
            <SingleBookingSwiper photos={currentBooking.roomPhotos} />
            <div className="roomData">
              <h2>{singleBooking.roomType}</h2>
              <p>{currentBooking.roomDescription}</p>
            </div>
          </SwiperContainer> */}
        </Subcontainer>
      </Container>
    );
  } else {
    return <Loader/>
  }
};