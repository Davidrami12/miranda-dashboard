import React, { useContext } from 'react';
import LoginContext from '../../context/contextLogin';
import { Link } from "react-router-dom";

import {
    Card,
    UserName,
    UserEmail
} from './LoguedUserStyled';
import styled from 'styled-components';

const LinkButton = styled.div`
    background-color: #EBF1EF;
    border: none;
    border-radius: 8px;
    width: 160px;
    height: 50px;
    a{
        text-align: center;
        font-family: var(--font-poppins);
        text-decoration: none;
        color: #135846;
        font-size: 14px;
        font-weight: 600;
        display: block;
        padding: 15px;
    }
`;

const LoguedUser = ({ user }) => {

    const [log,] = useContext(LoginContext);

    return (
        <Card>
            <img className='image' src={user.photo} alt="" />
            <UserName>{user.name}</UserName>
            <UserEmail>{log.email}</UserEmail>
            <LinkButton>
                <Link to={"/users/" + log.email}>Edit user</Link>
            </LinkButton>
        </Card>
    );
}


export default LoguedUser;