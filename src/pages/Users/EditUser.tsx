// React
import React, { useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getUser, editUser, getDataUsers } from "../../features/usersSlice";

// Components
import UserForm from "../../components/users/UserForm";
import { Loader } from "../../components/styled/Loader";
import { Notification } from "../../components/notification/Notification";
import { FaUserEdit } from "react-icons/fa"

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
  
  const formTitle: ReactNode = (
    <span style={{ display: 'inline-block', borderBottom: '4px solid #135846' }}>
      <FaUserEdit style={{width: 30, height: 30, marginRight: 10}}/>
      Edit current user
    </span>
  );

  useEffect(() => {
    if(id){
      dispatch(getUser(id)); // dispatch(getUser(Number(id)));
    }
  }, [dispatch, id]); // Removed singleUser from the dependency array

  // Set currentUser whenever singleUser changes, but only if singleUser is not null
  useEffect(() => {
    if (singleUser) {
      console.log("singleUser value:", singleUser);
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

  const handleSubmit = async (): Promise<void> => {
    await dispatch(editUser(currentUser)).then(() => {
      dispatch(getDataUsers());
      setCurrentUser({});
    });
    navigate("/users");
    Notification("User was edited successfully", "success")
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