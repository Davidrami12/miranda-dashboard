import React, { useState } from 'react';
import { Navigate } from "react-router-dom";

import Button from '../../components/StyledComponents/Button';
import Logo from '../../assets/logo.jpg';
import {
    LoginContainer,
    LoginCard,
    LogoContainer,
    InputContainer,
    Input,
    Icon,
    TempLog,
    ErrorMessage
} from "./LoginStyled"

import { FaUser } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri";



export const Login = ({ auth, setAuth }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hardCodedMail = "admin@admin.com";
    const hardCodedPassword = "123";

    const validateLogin = (e) => {
        e.preventDefault();
        let errorMsg = document.querySelector(".error");
        if (hardCodedMail === email && hardCodedPassword === password) {
            // If email and password are correct, the auth object is stored in the localStorage
            localStorage.setItem(
                "auth",
                JSON.stringify({ auth: true, email: email })
            );
            setAuth(true);
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
                    <p>Enter e-mail <b>admin@admin.com</b> and password <b>123</b> to log in</p>
                    <form onSubmit={validateLogin}>
                        <InputContainer>
                            <Input type="email" className='input-user' placeholder="e-mail" onChange={(e) => setEmail(e.target.value)}></Input>
                            <Icon><FaUser className='input-icon'></FaUser></Icon>
                        </InputContainer>
                        <InputContainer>
                            <Input type="password" className='input-pass' placeholder="password" onChange={(e) => setPassword(e.target.value)}></Input>
                            <Icon><RiLockPasswordFill className='input-icon'></RiLockPasswordFill></Icon>
                        </InputContainer>
                        <ErrorMessage className="error"> </ErrorMessage>
                        <Button type="login" text="LOGIN"></Button>
                    </form>
                </LoginCard>
            </LoginContainer>
        );
    }  
}
