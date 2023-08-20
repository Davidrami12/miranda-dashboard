// React
import React, { ReactNode, useState } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { createNewUser, getDataUsers } from "../../features/usersSlice";

// Components
import UserForm from "../../components/users/UserForm";
import { Notification } from "../../components/notification/Notification";
import { FaUserPlus } from "react-icons/fa"

// TypeScript
import { useAppDispatch } from "../../app/hooks";
import { UserInterface } from "../../interfaces/UserInterface";

export const NewUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formTitle: ReactNode = (
    <span style={{ display: 'inline-block', borderBottom: '4px solid #135846' }}>
      <FaUserPlus style={{width: 30, height: 30, marginRight: 10}}/>
      Adding a new user
    </span>
  );

  const [currentUser, setCurrentUser] = useState<UserInterface>({
    //id: Math.floor(Math.random() * 100000),
    photo: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    description: "",
    state: "",
    pass: "",
  });

  const handleInput = (event: any): void => {
    const { name, value } = event.target;
    let valToUpdate: string | string[];
    if (name === "position") {
      valToUpdate = value;
    } else {
      valToUpdate = value;
    }
    setCurrentUser((prevState) => ({ ...prevState, [name]: valToUpdate }));
  };

  const handleCancel = (e: Event): void => {
    e.preventDefault();
    navigate("/users");
  };

  const handleSubmit = async (): Promise<void> => {
    await dispatch(createNewUser(currentUser)).then(() => {
      dispatch(getDataUsers())
    });
    navigate("/users");
    Notification("New user added successfully!", "success");
  };

  return (
    <UserForm
      formTitle={formTitle}
      currentUser={currentUser}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};