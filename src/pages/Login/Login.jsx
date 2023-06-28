import React, { useState } from 'react';
import { Navigate } from "react-router-dom";

import Button from '../../components/Blocks/Button';
import Logo from '../../assets/logo.jpg';
import {
    LoginContainer,
    LoginCard,
    LogoContainer,
    InputContainer,
    Input,
    Icon,
    TempLog
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
        if (hardCodedMail === email && hardCodedPassword === password) {
            localStorage.setItem(
                "auth",
                JSON.stringify({ auth: true, email: email })
            );
            setAuth(true);
        } else {
            alert("Email or password are not correct! Please try again...");
        }
    };

    if(auth){
        return <Navigate to="/"></Navigate>;
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
                            <Input type="text" className='input-user' placeholder="e-mail" onChange={(e) => setEmail(e.target.value)}></Input>
                            <Icon><FaUser className='input-icon'></FaUser></Icon>
                        </InputContainer>
                        <InputContainer>
                            <Input type="password" className='input-pass' placeholder="password" onChange={(e) => setPassword(e.target.value)}></Input>
                            <Icon><RiLockPasswordFill className='input-icon'></RiLockPasswordFill></Icon>
                        </InputContainer>
                        <Button type="login" text="LOGIN"></Button>
                    </form>
                </LoginCard>
            </LoginContainer>
        );
    }  
}
