import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import { MdLogout, MdNotificationsNone, MdOutlineEmail } from "react-icons/md";
import { HeaderContainer, HeaderTitle, HeaderElements } from './HeaderStyled';

import { useLogout } from "../../hooks/useLogout"

export const Header = () => {

  let location = useLocation();
  const { logout } = useLogout();

  const getNavBarTitle = (currentRoute: string) => {
    if (!currentRoute)
      return "Dashboard";
    return currentRoute.toUpperCase().charAt(0) + currentRoute.slice(1);
  }

  const goLogin = () => {
    localStorage.removeItem("auth");
    logout()
  };

  return (
    <HeaderContainer>
        <HeaderElements>
          <HeaderTitle>
            {getNavBarTitle(location.pathname.split('/')[1])}
          </HeaderTitle>

          <MdOutlineEmail style={{width: 30, height: 30}}/>
          <MdNotificationsNone style={{width: 30, height: 30}}/>
          <MdLogout data-cy="logout-button" onClick={goLogin} style={{width: 30, height: 30, cursor: 'pointer'}}/>
        
        </HeaderElements>
    </HeaderContainer>
  );
}