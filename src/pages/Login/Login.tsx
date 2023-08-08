import React, { useState } from 'react';
import { Navigate } from "react-router-dom";

// React Context
import { useLogin } from "../../hooks/useLogin";

// Components
import {
  LoginContainer,
  LoginCard,
  LogoContainer,
  InputContainer,
  Input,
  Icon,
  ErrorMessage
} from "../../components/styled/Forms";
import Button from '../../components/styled/Buttons';
import Logo from '../../assets/logo.jpg';
import { FaUser } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri";

export const Login = () => {

  const { login } = useLogin();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  /* const hardCodedUser = {
    email: "admin@admin.com",
    password: "Admin123",
    name: "Admin"
  };

  const validateLogin = (e: any): void => {
    e.preventDefault();
    if (hardCodedUser.email === email && hardCodedUser.password === password) {
      // If email and password are correct, the auth object is stored in the localStorage
      login(email, password);
      localStorage.setItem(
        "auth",
        JSON.stringify({
          auth: true,
          email: hardCodedUser.email,
          name: hardCodedUser.name
        })
      );
      
    } else {
      let errorMsg = document.querySelector(".error");
      if (errorMsg) {
        errorMsg.innerHTML = "Email or password are not correct. Please try again.";
      }
    }
  }; */

  const validateLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    const url = process.env.REACT_APP_API_URL;
    const response = await fetch(`${url}/login`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      }
    );

    const data = await response.json();

    if (response.status === 200 && data.token) { 
      login(email, password);
      localStorage.setItem(
        "auth",
        JSON.stringify({
          auth: true,
          name: "Admin",
          email: email,
          //token: data.token,
        })
      );

    } else {
      let errorMsg = document.querySelector(".error");
      if (errorMsg) {
        errorMsg.innerHTML = "Email or password are not correct. Please try again.";
      }
    }
  };
  
  return (
    <LoginContainer>
      <LoginCard>
        <LogoContainer>
          <img src={Logo} alt="Logo"/>
        </LogoContainer>
        <hr></hr>
        <p>This is a Dashboard for admin users in Miranda Hotel. </p>
        <p>To log in and visualize the dashboard, please enter e-mail <b>admin@admin.com</b> and password <b>Admin123</b>.</p>
        <form onSubmit={validateLogin} /*style={{padding: "2rem 0rem 0rem 0rem"}}*/>
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
          <ErrorMessage className="error">&nbsp;</ErrorMessage>
          <Button type="login" text="LOGIN" data-cy="submit" />
        </form>
      </LoginCard>
    </LoginContainer>
  );
  
}
