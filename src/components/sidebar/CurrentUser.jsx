// React & Router
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

// React Context
import { useAuthContext } from "../../hooks/useAuthContext";

// Styled Components
import { Card, UserName, UserEmail, LinkButton } from "./CurrentUserStyled";

// User section in sidebar. This gets updated based on the authContext
const LoguedUser = ({ photo }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const goToSingleUser = (id) => {
    navigate("/editOwnUser");
  };

  return (
    <Card>
      <img className="image" src={photo.photo} alt="" />
      <UserName>{user.userName}</UserName>
      <UserEmail>{user.email}</UserEmail>
      <LinkButton
        onClick={() => {
          goToSingleUser(user.email);
        }}
      >
        <Link>Edit user</Link>
      </LinkButton>
    </Card>
  );
};

export default LoguedUser;