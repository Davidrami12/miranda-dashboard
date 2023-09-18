// React
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

// Icons & styles
import { MdLogout, MdNotificationsNone, MdOutlineEmail, MdPersonOutline } from "react-icons/md";
import { HeaderContainer, HeaderTitle, HeaderElements, Icon } from './HeaderStyled';

import { useLogout } from "../../hooks/useLogout"
import { Notification } from "../notification/Notification";

export const Header = ({ sidebarExpanded  }) => {

  let location = useLocation();
  const { logout } = useLogout();

  const getNavBarTitle = (currentRoute: string) => {
    if (!currentRoute) return "Dashboard";
  
    // Capitalize the first letter
    let title = currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1);
  
    // Insert spaces before other uppercase letters
    return title.replace(/([A-Z])/g, ' $1').trim();
  }

  const goLogin = () => {
    localStorage.removeItem("auth");
    logout()
    Notification("User logged out", "info")
  };

  return (
    <HeaderContainer>
        <HeaderElements sidebarExpanded={sidebarExpanded}>
          <HeaderTitle>
            {getNavBarTitle(location.pathname.split('/')[1])}
          </HeaderTitle>

          <Icon>
            <Link to="/contact"><MdOutlineEmail style={{width: 30, height: 30}}/></Link>
          </Icon>
          <Icon>
            <Link to="/editOwnUser"><MdPersonOutline style={{width: 30, height: 30}}/></Link>
          </Icon>
          <Icon onClick={goLogin}>
            <MdLogout data-cy="logout-button" style={{width: 30, height: 30}}/>
          </Icon>
          
        </HeaderElements>
    </HeaderContainer>
  );
}