import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import { MdLogout, MdNotificationsNone, MdOutlineEmail } from "react-icons/md";
import { styled } from 'styled-components';


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

export const Header = ({ setAuth }) => {

    let location = useLocation();

    const getNavBarTitle = (currentRoute) => {
      if (!currentRoute)
        return "Dashboard";
      return currentRoute.toUpperCase().charAt(0) + currentRoute.slice(1);
    }

    const goLogin = () => {
      localStorage.removeItem("auth");
      setAuth(false);
    };

    return (
        <HeaderContainer>
            <HeaderElements>
              <HeaderTitle>
                {getNavBarTitle(location.pathname.split('/')[1])}
              </HeaderTitle>

              <MdOutlineEmail style={{width: 30, height: 30}}/>
              <MdNotificationsNone style={{width: 30, height: 30}}/>
              <MdLogout onClick={goLogin} style={{width: 30, height: 30, cursor: 'pointer'}}/>

            </HeaderElements>
        </HeaderContainer>
    );
}