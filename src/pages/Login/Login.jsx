import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router';
import { login } from "../../context/actions";

import Button from '../../components/Blocks/Button';
//import Logo from '../../components/Logo/Logo';
import LoginContext from '../../context/contextLogin';

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
    const [log, setLog] = useContext(LoginContext);

    const [email, setEmail] = useState("admin@admin.com");
    const [pass, setPass] = useState("admin123");

    let emailHard = log.email || "admin@admin.com";
    let passHard = "admin123";

    const checkLogin = () => {
        if (emailHard === email && passHard === pass) {
            setLog(login({ auth: true, email: email }));
            localStorage.setItem("login", JSON.stringify({ auth: true, email: email }));
        } else {
            alert("usuario o contraseña incorrectos");
        }
    }

    if (!log.auth) {
        return (
            <LoginContainer>
                <LoginCard>
                    {/*<LogoContainer>
                        <Logo />
        </LogoContainer>*/}
                    <form>
                        <InputContainer>
                            <Input type="text" className='input-user' value={email} placeholder="e-mail" onChange={(e) => setEmail(e.target.value)}></Input>
                            <Icon><FaUser className='input-icon'></FaUser></Icon>
                        </InputContainer>
                        <InputContainer>
                            <Input type="password" className='input-pass' value={pass} placeholder="password" onChange={(e) => setPass(e.target.value)}></Input>
                            <Icon><RiLockPasswordFill className='input-icon'></RiLockPasswordFill></Icon>
                        </InputContainer>
                        <Button type="login" text="LOGIN" click={checkLogin}></Button>
                    </form>
                </LoginCard>
            </LoginContainer>
        );

    } else {
        return (
            <Navigate to="/"></Navigate>
        )
    }
}