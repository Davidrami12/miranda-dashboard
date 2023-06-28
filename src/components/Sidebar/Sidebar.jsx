import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LoguedUser from './LoguedUser';
import Logo from '../../assets/logo.jpg'

import {
  NavContainer,
  LogoContainer,
  Navigation,
  MenuButton,
  UserCard,
  NavigationDescription,
  NavigationRights,
  NavigationAuthor,
  Link,
  MenuIcon
} from "./SidebarStyled"

import { MdMenuOpen } from "react-icons/md";
import { LuLayoutDashboard } from 'react-icons/lu'
import { BiSolidContact } from 'react-icons/bi'
import { BsCalendarCheck } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { ImKey } from "react-icons/im"



export const Sidebar = () => {

    let user = {
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Sashenka Gouthier",
      email: "sgouthier0@aboutads.info",
    }

    const [display, setDisplay] = useState(0);
    const [rotated, setRotated] = useState(false);

    const location = useLocation();

    const displayMenu = () => {
      setDisplay(!display)
      setRotated(!rotated);  
    }

    return (
      <NavContainer display={display ? "0px" : "345px" }>
        <MenuButton onClick={displayMenu}>
          <MenuIcon rotated={rotated ? 1 : 0} className='menu' style={{}}/>
        </MenuButton>

        <LogoContainer>
          <img src={Logo} alt="Logo"/>
        </LogoContainer>
        <Navigation>
          <ul>
            <NavLink to="/">
              <Link route="/" current={location.pathname}>
                  <div/><LuLayoutDashboard className='icon' /><p>Dashboard</p>
              </Link>
            </NavLink>
            <NavLink to="/bookings">
              <Link route="/bookings" current={location.pathname}>
                  <div/><BsCalendarCheck className='icon' /><p>Bookings</p>
              </Link>
            </NavLink>
            <NavLink to="/rooms">
              <Link route="/rooms" current={location.pathname}>
                  <div/><ImKey className='icon' /><p>Rooms</p>
              </Link>
            </NavLink>
            <NavLink to="/contact">
              <Link route="/contact" current={location.pathname}>
                  <div/><BiSolidContact className='icon' /><p>Contact</p>
              </Link>
            </NavLink>
            <NavLink to="/users">
              <Link route="/users" current={location.pathname}>
                  <div/><FaUsers className='icon' /><p>Users</p>
              </Link>
            </NavLink>
          </ul>
        </Navigation>

        <UserCard>
          {/*<LoguedUser user={user}></LoguedUser>*/}
        </UserCard>

        <NavigationDescription>Travl Hotel Admin Dashboard</NavigationDescription>
        <NavigationRights>&copy; 2023 All Rights Reserved</NavigationRights>
        <NavigationAuthor>Made with ♥ by David R.</NavigationAuthor>
      </NavContainer>
    )
}