// React & Router
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { deleteUser } from "../../features/usersSlice";

// Styled Components
import {
  Row,
  DataContainer,
  UserContainer,
  UserName,
  UserID,
  UserJoinDate,
  Status,
} from "./UserRowStyled";
import { DataContainerButton, DropDown } from "../bookings/BookingRowStyled";

// TypeScript
import { useAppDispatch } from "../../app/hooks";
import { UserInterface } from "../../interfaces/UserInterface";

type UsersType = {
  singleUser: UserInterface | null | undefined;
};

// Component that creates a table row for the bookings table
export const UserRow = ({ user }: UsersType | any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [showOptions, setShowOptions] = useState<boolean>(false);

  const goToSingleUser = (id: number) => {
    navigate("/users/" + id);
  };

  const editSingleUser = (e: Event, id: number) => {
    e.preventDefault();
    navigate("/editUser/" + id);
  };

  const deleteCurrentUser = (e: Event, id: number) => {
    e.preventDefault();
    dispatch(deleteUser(id));
  };

  return (
    <Row
      onClick={() => {
        goToSingleUser(user.id);
      }}
    >
      <td>
        <UserContainer>
          <img src={user.photo} alt="User portrait" />
          <div>
            <UserName>{user.name}</UserName>
            <UserID>#{user.id}</UserID>
            <UserJoinDate>Joined on {user.date}</UserJoinDate>
          </div>
        </UserContainer>
      </td>
      <DataContainer className="data-container__text">
        <p>{user.description}</p>
      </DataContainer>
      <td>
        <UserContainer>
          <div>
            <UserJoinDate style={{ fontWeight: 500 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 48 48"
              >
                <path d="M39.8 43.15q-6.35 0-12.6-3.1t-11.25-8.075q-5-4.975-8.1-11.25-3.1-6.275-3.1-12.575 0-1.45 1-2.45 1-1 2.45-1h7q1.55 0 2.525.8.975.8 1.325 2.35l1.35 5.5q.25 1.35-.05 2.325-.3.975-1.1 1.675l-5.2 4.75q2.5 3.95 5.4 6.825 2.9 2.875 6.5 4.875l5-5.05q.9-.9 1.925-1.225Q33.9 27.2 35.15 27.5l4.9 1.2q1.55.4 2.375 1.4.825 1 .825 2.55v7q0 1.5-1 2.5t-2.45 1Zm-28.1-25.2 4-3.75-1.1-4.8H9.55q-.1 1.7.425 3.775T11.7 17.95ZM30.25 36.2q1.8.9 3.975 1.45 2.175.55 4.275.7V33.2l-4.4-1ZM11.7 17.95ZM30.25 36.2Z" />
              </svg>{" "}
              {user.phone}
            </UserJoinDate>
            <UserJoinDate style={{ fontWeight: 500 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 48 48"
              >
                <path d="M24 45.15q-4.4 0-8.25-1.65-3.85-1.65-6.725-4.525Q6.15 36.1 4.5 32.25 2.85 28.4 2.85 24t1.65-8.25q1.65-3.85 4.525-6.725Q11.9 6.15 15.75 4.5 19.6 2.85 24 2.85t8.25 1.65q3.85 1.65 6.725 4.525Q41.85 11.9 43.5 15.75q1.65 3.85 1.65 8.25v2.65q0 3.25-2.175 5.225Q40.8 33.85 37.5 33.85q-2 0-3.675-.95-1.675-.95-2.475-2.6-1.2 1.85-3.125 2.7-1.925.85-4.225.85-4.1 0-7-2.85-2.9-2.85-2.9-7t2.9-7.05q2.9-2.9 7-2.9 4.15 0 7.025 2.875T33.9 24v2.3q0 1.45 1.05 2.45 1.05 1 2.55 1 1.45 0 2.475-1Q41 27.75 41 26.3V24q0-7.15-4.925-12.075Q31.15 7 24 7q-7.1 0-12.05 4.95Q7 16.9 7 24q0 7.15 4.925 12.075Q16.85 41 24 41h10.7v4.15Zm0-15.4q2.4 0 4.1-1.675Q29.8 26.4 29.8 24q0-2.4-1.7-4.125T24 18.15q-2.4 0-4.1 1.725Q18.2 21.6 18.2 24t1.7 4.075q1.7 1.675 4.1 1.675Z" />
              </svg>{" "}
              {user.email}
            </UserJoinDate>
          </div>
        </UserContainer>
      </td>
      <td>
        <Status state={user.state}>{user.state}</Status>
      </td>
      <DataContainerButton style={{ position: "relative" }}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            viewBox="0 0 48 48"
            onClick={(e) => {
              // With this check I avoid the parents event listener to be fired when the child event listener should be fired
              if (e && e.stopPropagation) e.stopPropagation();
              setShowOptions(!showOptions);
            }}
          >
            <path d="M24.05 41.7q-1.25 0-2.125-.875t-.875-2.075q0-1.2.875-2.1.875-.9 2.075-.9 1.25 0 2.1.9.85.9.85 2.1 0 1.2-.85 2.075-.85.875-2.05.875Zm0-14.75q-1.25 0-2.125-.875T21.05 24q0-1.25.875-2.1.875-.85 2.075-.85 1.25 0 2.1.85.85.85.85 2.05 0 1.25-.85 2.125t-2.05.875Zm0-14.7q-1.25 0-2.125-.875T21.05 9.25q0-1.25.875-2.125T24 6.25q1.25 0 2.1.875.85.875.85 2.125t-.85 2.125q-.85.875-2.05.875Z" />
          </svg>
        </button>
        {showOptions ? (
          <DropDown>
            <ul>
              <li>
                <button
                  onClick={(e: any) => {
                    if (e && e.stopPropagation) e.stopPropagation();
                    editSingleUser(e, user.id);
                  }}
                >
                  Edit user
                </button>
              </li>
              <li>
                <button
                  onClick={(e: any) => {
                    if (e && e.stopPropagation) e.stopPropagation();
                    deleteCurrentUser(e, user.id);
                  }}
                >
                  Delete user
                </button>
              </li>
            </ul>
          </DropDown>
        ) : null}
      </DataContainerButton>
    </Row>
  );
};