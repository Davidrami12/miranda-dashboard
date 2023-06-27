import React, { useState, useEffect, useContext } from 'react';
import { AiOutlineMail, AiOutlineBell } from "react-icons/ai";
import { useLocation } from 'react-router';
import { FiLogOut } from "react-icons/fi";

import { MdLogout } from "react-icons/md";

import { styled } from 'styled-components';

import LoginContext from '../../context/contextLogin';
import { logout } from '../../context/actions';


const HeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 3px 10px #00000005;
`;

const HeaderTitle = styled.h1`
  font-size: 28px;
  font: normal normal 600 28px/42px Poppins;
  font-weight: 600;
  flex: 1;
`;

const HeaderElements = styled.div`
  width: 100%;
  padding-left: 5rem;
  padding-right: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const Header = () => {

    const [log, setLog] = useContext(LoginContext);
    let location = useLocation();

    const getNavBarTitle = (currentRoute) => {
      if (!currentRoute)
        return "Dashboard";
      return currentRoute.toUpperCase().charAt(0) + currentRoute.slice(1);
    }

    const goLogin = () => {
        setLog(logout({ auth: false, email: log.email }));
        localStorage.setItem("login", JSON.stringify({ auth: false, email: log.email }));
    }

    return (
        <HeaderContainer>
            <HeaderElements>
              <HeaderTitle>
                {getNavBarTitle(location.pathname.split('/')[1])}
              </HeaderTitle>

              <AiOutlineMail style={{width: 30, height: 30}}/>
              <AiOutlineBell style={{width: 30, height: 30}}/>
              <FiLogOut onClick={goLogin} style={{width: 30, height: 30, cursor: 'pointer'}}/>

            </HeaderElements>
        </HeaderContainer>
    );
}