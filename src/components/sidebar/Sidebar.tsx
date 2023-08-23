import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CurrentUser from './CurrentUser';
import Logo from '../../assets/logo.jpg';
import UserImage from '../../assets/images/admin.png';

import {
  NavContainer,
  LogoContainer,
  Navigation,
  MenuButton,
  UserCard,
  NavigationDescription,
  NavigationRights,
  NavigationAuthor,
  NavigationRepository,
  Link,
  MenuIcon,
  Icon
} from "./SidebarStyled"

import { MdMenuOpen } from "react-icons/md";
import { LuLayoutDashboard } from 'react-icons/lu'
import { BiSolidContact } from 'react-icons/bi'
import { BsCalendarCheck } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { ImKey } from "react-icons/im"



export const Sidebar = () => {

  let user: object = {
    photo: UserImage,
    name: "Admin",
    email: "admin@admin.com",
  }

  const [display, setDisplay] = useState(0);
  const [rotated, setRotated] = useState(false);

  const location = useLocation();

  const displayMenu = () => {
    setDisplay(display === 0 ? 345 : 0);
    setRotated(!rotated);
  }

  return (
    <NavContainer display={display ? "0px" : "345px"}>
      <MenuButton onClick={displayMenu}>
        <Icon><MenuIcon rotated={rotated} className='menu' /></Icon>
      </MenuButton>

      <LogoContainer>
        <img src={Logo} alt="Logo"/>
      </LogoContainer>

      <Navigation>
        <ul>
          <NavLink to="/dashboard">
            <Link route="/dashboard" current={location.pathname}>
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

        <UserCard>
          <CurrentUser photo={user}></CurrentUser>
        </UserCard>

      </Navigation>

      <NavigationDescription>Travl Hotel Admin Dashboard</NavigationDescription>
      <NavigationRights>&copy; 2023 All Rights Reserved</NavigationRights>
      <NavigationAuthor>Made with ♥ by David R.</NavigationAuthor>
      <NavigationRepository><a href='https://github.com/Davidrami12/miranda-dashboard' target='_blank' rel="noreferrer">Check this repository here!</a></NavigationRepository>
    
    </NavContainer>
  )
}