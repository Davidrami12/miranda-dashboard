import React, { useState } from 'react';
import { Navigate } from "react-router-dom";

// React Context
import { useLogin } from "../../hooks/useLogin";

import Button from '../../components/styled/Buttons';
import Logo from '../../assets/logo.jpg';
import {
  LoginContainer,
  LoginCard,
  LogoContainer,
  InputContainer,
  Input,
  Icon,
  ErrorMessage,
  LoginButton,
  Description,
  RadioInput,
  RadioLabel,
  RadioDescription,
  InputSubmit,
  FormTitle,
  InputCancel,
} from "./LoginStyled"

import { FaUser } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri";



export const Login = ({ auth, setAuth }) => {

  const { login } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hardCodedMail = "admin@admin.com";
  const hardCodedPassword = "Admin123";

  const validateLogin = (e) => {
    e.preventDefault();
    let errorMsg = document.querySelector(".error");
    if (hardCodedMail === email && hardCodedPassword === password) {
      // If email and password are correct, the auth object is stored in the localStorage
      login(email, password);
      localStorage.setItem(
        "auth",
        JSON.stringify({ auth: true, email: email, password: password })
      );
      //setAuth(true);
    } else {
      errorMsg.innerHTML = "Email or password are not correct. Please try again.";
    }
  };

  // If user is already authenticated redirected to home page
  if(auth){
    return <Navigate to="/"></Navigate>;
  
  // If user is not authenticated display login form
  }else{
      
    return (
      <LoginContainer>
        <LoginCard>
          <LogoContainer>
            <img src={Logo} alt="Logo"/>
          </LogoContainer>
          <hr></hr>
          <p>This is a Dashboard for admin users in Miranda Hotel. </p>
          <p>To log in and visualize the dashboard, please enter e-mail <b>admin@admin.com</b> and password <b>Admin123</b>.</p>
          <form onSubmit={validateLogin}>
            <InputContainer>
                <Input 
                  type="email" 
                  data-cy="email"
                  className='input-mail' 
                  placeholder="e-mail" 
                  onChange={(e) => setEmail(e.target.value)}/>
                <Icon><FaUser className='input-icon'></FaUser></Icon>
            </InputContainer>
            <InputContainer>
              <Input 
                type="password"
                data-cy="password"
                className='input-pass' 
                placeholder="password" 
                onChange={(e) => setPassword(e.target.value)}/>
              <Icon><RiLockPasswordFill className='input-icon'></RiLockPasswordFill></Icon>
            </InputContainer>
            <ErrorMessage className="error"> </ErrorMessage>
            <Button 
              type="login" 
              text="LOGIN"
              data-cy="submit">
                LOGIN
            </Button>
          </form>
        </LoginCard>
      </LoginContainer>
    );
  }  
}
