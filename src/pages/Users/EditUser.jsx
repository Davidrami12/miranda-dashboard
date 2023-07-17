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

export const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const { singleUser } = useSelector((state) => state.usersReducer);

  const [currentUser, setCurrentUser] = useState(null);
  const formTitle = "Edit current user";

  useEffect(() => {
    dispatch(getUser(Number(id)));
  }, [dispatch, id]); // Removed singleUser from the dependency array

  // Set currentUser whenever singleUser changes, but only if singleUser is not null
  useEffect(() => {
    if (singleUser) {
      setCurrentUser(singleUser);
    }
  }, [singleUser]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setCurrentUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setCurrentUser({});
    navigate("/users");
  };

  const handleSubmit = () => {
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