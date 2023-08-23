// React & Router
import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Redux
import { getUser } from "../../features/usersSlice";

// Styled Components
import { Container } from "../../components/styled/Containers";
import {
  Subcontainer,
  BookingDataContainer,
  BookingDataSubcontainer,
  Info,
  InfoContainer,
  Title,
  Data,
  UserStatus,
  Divider,
} from "./SingleUserStyled";
import {
  GuestContainer,
  GuestName,
  BookingID,
} from "../../components/bookings/BookingRowStyled";
import { Loader } from "../../components/styled/Loader";
import { RiArrowGoBackFill } from "react-icons/ri"

// TypeScript
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { UserInterface } from "../../interfaces/UserInterface";

type UsersType = {
  singleUser: UserInterface | null | undefined;
};

// Component that displays the data for the selected room
export const SingleUser = () => {

  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();
  
  const { id } = params;
  const { singleUser } = useAppSelector<UsersType>(
    (state) => state.usersReducer
  );
  const [currentUser, setCurrentUser] = useState<UserInterface | any>(singleUser);

  useEffect(() => {
    if (id) {
      dispatch(getUser(id));
    }
  }, [id, dispatch]);

  const goBackToUsers = () => {
    navigate("/users");
  }

  if (singleUser) {
    return (
      <Container style={{ width: "95%", marginTop: 30, flexDirection: "row" }}>
        <Subcontainer style={{ width: "100%" }}>
          <RiArrowGoBackFill style={{ width: 30 , height: 30, cursor: "pointer"}} onClick={goBackToUsers}/>
          <GuestContainer>
            <img style={{ width: 300, height: 300 }} src={singleUser.photo} alt="User portrait"/>
            <div>
              <Info>User name:</Info>
              <InfoContainer>{singleUser.name}</InfoContainer>
              <Info>User ID:</Info>
              <InfoContainer>{singleUser._id}</InfoContainer>
              <Info>E-mail:</Info>
              <InfoContainer>{singleUser.email}</InfoContainer>
              <Info>Phone Number:</Info>
              <InfoContainer>{singleUser.phone}</InfoContainer>
            </div>
          </GuestContainer>
          <BookingDataContainer>
            <BookingDataSubcontainer>
              <Title>Start date</Title>
              <Data>{singleUser.date}</Data>
            </BookingDataSubcontainer>
            <BookingDataSubcontainer>
              <Title>Current position</Title>
              <Data>{singleUser.description}</Data>
            </BookingDataSubcontainer>
            <BookingDataSubcontainer>
              <Title>Status</Title>
              <UserStatus state={singleUser.state}>{singleUser.state}</UserStatus>
            </BookingDataSubcontainer>
          </BookingDataContainer>
          {/* <Divider /> */}
        </Subcontainer>
      </Container>
    );
  } else {
    return <Loader/>;
  }
};