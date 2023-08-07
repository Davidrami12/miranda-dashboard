// React
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

// React Context
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEditUser } from "../../hooks/useEditUser";

// Styled Components
import {
  DashboardForm,
  FormTitle,
  LoginContainer,
  LoginCard,
  InputContainer,
  Input,
  RadioDescription,
  LoginButton,
  Description,
} from "../../components/styled/Forms";

// Component to update the user´s userName and email. Dispatching the editUser reducer
export const EditOwnUser = () => {
  const { user } = useAuthContext();
  const { editUser } = useEditUser();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const validateEdit = () => {
    editUser(name, email);
    localStorage.setItem(
      "auth",
      JSON.stringify({
        auth: true,
        name: name,
        email: email,
      })
    );
    navigate("/");
  };

  return (
    <DashboardForm /* style={{ minHeight: "80%" }} */>
      <LoginCard>
        <FormTitle>
          Edit admin user
        </FormTitle>
        <form>
          <InputContainer>
            <RadioDescription>Your current admin name</RadioDescription>
            <Input
              type="text"
              className="input-user"
              required
              value={name}
              placeholder={user.name}
              onChange={(e) => setName(e.target.value)}
            ></Input>
          </InputContainer>
          <InputContainer>
            <RadioDescription>Your current admin email</RadioDescription>
            <Input
              type="email"
              className="input-user"
              required
              value={email}
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </InputContainer>
          <LoginButton onClick={() => validateEdit()}>Save</LoginButton>
        </form>
      </LoginCard>
    </DashboardForm>
  );
};