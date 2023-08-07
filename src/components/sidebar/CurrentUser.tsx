// React & Router
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

// React Context
import { useAuthContext } from "../../hooks/useAuthContext";

// Styled Components
import { Card, UserName, UserEmail, LinkButton } from "./CurrentUserStyled";

// User section in sidebar. This gets updated based on the authContext
const CurrentUser = ({ photo }: any) => {
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const goToSingleUser = (): void => {
    navigate("/editOwnUser");
  };

  return (
    <Card>
      <img className="image" src={photo.photo} alt="Admin photo" />
      <UserName>{user.name}</UserName>
      <UserEmail>{user.email}</UserEmail>
      
      <LinkButton onClick={() => { goToSingleUser() }}>
        <Link to={"#"}>Edit user</Link>
      </LinkButton>
    </Card>
  );
};

export default CurrentUser;