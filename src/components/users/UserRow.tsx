// React & Router
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { deleteUser, getDataUsers } from "../../features/usersSlice";

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
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { AiOutlinePhone, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { DataContainerButton, DropDown } from "../bookings/BookingRowStyled";
import { Notification } from "../notification/Notification";

// TypeScript
import { useAppDispatch } from "../../app/hooks";
import { UserInterface } from "../../interfaces/UserInterface";

type UsersType = {
  singleUser: UserInterface | null | undefined;
};

export const UserRow = ({ user }: UsersType | any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [showOptions, setShowOptions] = useState<boolean>(false);

  const goToSingleUser = (id: string): void => {
    navigate("/users/" + id);
  };

  const editSingleUser = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ): void => {
    e.preventDefault();
    navigate("/editUser/" + id);
  };

  const deleteCurrentUser = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ): void => {
    e.preventDefault();
    dispatch(deleteUser(id)).then(() => {
      Notification("User was deleted successfully", "info")
      dispatch(getDataUsers());
    });
  };

  return (
    <Row onClick={() => {
      if (user._id) {
        goToSingleUser(user._id);
      }}}>
      <td>
        <UserContainer>
          <img src={user.photo} alt="User portrait" />
          <div>
            <UserName>{user.name}</UserName>
            <UserID>#{user._id}</UserID>
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
              <AiOutlinePhone style={{height: 22, width: 22}}/>
              {user.phone}
            </UserJoinDate>
            <UserJoinDate style={{ fontWeight: 500 }}>
              <MdOutlineAlternateEmail style={{height: 22, width: 22}}/>
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
          <PiDotsThreeVerticalBold style={{ height: 30, width: 30}}
            onClick={(e) => {
              if (e && e.stopPropagation) e.stopPropagation();
              setShowOptions(!showOptions);
            }}/>
        </button>
        {showOptions ? (
          <DropDown>
            <ul>
              <li>
                <button
                  onClick={(e: any) => {
                    if (e && e.stopPropagation) e.stopPropagation();
                    if (user._id) {
                      editSingleUser(e, user._id);
                    }
                  }}
                >
                  <AiOutlineEdit style={{ width: 22, height: 22, marginBottom: -5, marginRight: 5 }}/>
                  Edit user
                </button>
              </li>
              <li>
                <button
                  onClick={(e: any) => {
                    if (e && e.stopPropagation) e.stopPropagation();
                    if (user._id) {
                      deleteCurrentUser(e, user._id);
                    }
                  }}
                >
                  <AiOutlineDelete style={{ width: 22, height: 22, marginBottom: -5, marginRight: 5}}/>
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