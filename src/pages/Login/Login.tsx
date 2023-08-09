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

import { Notification } from '../../components/notification/Notification';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {

  const { login } = useLogin();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //toast("Test notification");
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

    console.log("Received email:", email, "Received password:", password);
    console.log("Response Status:", response.status);

    if (response.status === 200) { 
      if(data.token){
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
      Notification('Logged in successfully!', 'success');
      }
    } else if(response.status === 400) {
      Notification('Missing user credentials. Please try again!', 'warn');
      /* let errorMsg = document.querySelector(".error");
      if (errorMsg) {
        errorMsg.innerHTML = "Email or password are not correct. Please try again.";
      } */
    } else if(response.status === 401) {
      Notification('User credentials does not match. Please try again!', 'warn');
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
