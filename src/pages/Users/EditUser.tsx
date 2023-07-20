// React
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getUser, editUser } from "../../features/usersSlice";

// Components
import UserForm from "../../components/users/UserForm";
import { Loader } from "../../components/styled/Loader";

// TypeScript
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { UserInterface } from "../../interfaces/UserInterface";

type UsersType = {
  singleUser: UserInterface | null | undefined;
};

export const EditUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const { singleUser } = useAppSelector<UsersType>(
    (state) => state.usersReducer
  );

  const [currentUser, setCurrentUser] = useState<UserInterface | any>(null);
  const formTitle: string = "Edit current user";

  useEffect(() => {
    dispatch(getUser(Number(id)));
  }, [dispatch, id]); // Removed singleUser from the dependency array

  // Set currentUser whenever singleUser changes, but only if singleUser is not null
  useEffect(() => {
    if (singleUser) {
      setCurrentUser(singleUser);
    }
  }, [singleUser]);

  const handleInput = (event: any): void => {
    const { name, value } = event.target;
    setCurrentUser((prevState: UserInterface) => ({ ...prevState, [name]: value }));
  };

  const handleCancel = (e: Event): void => {
    e.preventDefault();
    setCurrentUser({});
    navigate("/users");
  };

  const handleSubmit = (): void => {
    dispatch(editUser(currentUser));
    setCurrentUser({});
    navigate("/users");
  };

  return !currentUser ? (
    <Loader />
  ) : (
    <UserForm
      formTitle={formTitle}
      currentUser={currentUser}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};