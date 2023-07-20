// React
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { createNewUser } from "../../features/usersSlice";

// Components
import UserForm from "../../components/users/UserForm";

// TypeScript
import { useAppDispatch } from "../../app/hooks";
import { UserInterface } from "../../interfaces/UserInterface";

export const NewUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formTitle: string = "Adding a new user";
  const [currentUser, setCurrentUser] = useState<UserInterface>({
    id: Math.floor(Math.random() * 100000),
    photo: "",
    name: "",
    position: "",
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

  const handleSubmit = (): void => {
    dispatch(createNewUser(currentUser));
    navigate("/users");
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