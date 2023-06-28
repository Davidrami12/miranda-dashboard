import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';


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

export const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    let emailHardcoded = "admin@admin.com";
    let passHardcoded = "123";

    const checkLogin = (e) => {
        e.preventDefault();

        if (emailHardcoded === email && passHardcoded === pass) {
            localStorage.setItem("login", JSON.stringify({ auth: true, email: email }));
            navigate("/");
        } else {
            alert("usuario o contraseña incorrectos");
        }
    }

    return (
        <LoginContainer>
            <LoginCard>
                <LogoContainer>
                    <img src={Logo} />
                </LogoContainer>
                <p>Enter e-mail <b>admin@admin.com</b> and password <b>123</b> to log in</p>
                <form onSubmit={(e) => {checkLogin(e)}}>
                    <InputContainer>
                        <Input type="text" className='input-user' placeholder="e-mail" onChange={(e) => setEmail(e.target.value)}></Input>
                        <Icon><FaUser className='input-icon'></FaUser></Icon>
                    </InputContainer>
                    <InputContainer>
                        <Input type="password" className='input-pass' placeholder="password" onChange={(e) => setPass(e.target.value)}></Input>
                        <Icon><RiLockPasswordFill className='input-icon'></RiLockPasswordFill></Icon>
                    </InputContainer>
                    <Button type="login" text="LOGIN"></Button>
                </form>
            </LoginCard>
        </LoginContainer>
    );
}
