import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaGripVertical, FaKey, FaRegCalendarAlt, FaRegUser, FaPhoneAlt } from 'react-icons/fa';
import logo from '../../assets/logo.jpg'

import { BiKey } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import { FaUserFriends, FaArrowsAltH } from "react-icons/fa";
import { AiFillHome, AiFillContacts, AiFillHeart } from "react-icons/ai";




const SidebarContainer = styled.div`
  /*position: fixed;
  top: 0;
  left: 0;
  width: 345px;
  height: 100%;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: lightgreen;
  box-shadow: 13px 3px 40px #00000005;
  opacity: 1;
  //padding: 20px;
  z-index: 99;*/
  padding: 2rem;
  background: lightgreen;
  height: 100vh;

  & > img {
    width: 280px;
  }
`;

const SidebarList = styled.ul`
  margin-top: 2rem;
  list-style-type: none;
`;

const SidebarListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  color: #799283;
  font-size: 18px;
  font: normal normal normal 18px/27px Poppins;
  padding: 2rem 0rem 2rem 0rem;

  & > a {
    width: 100%;

    &:hover{
      color: #E23428;
    }
  }
`;


export const Sidebar = () => {

  const [display, setDisplay] = useState(0);
    const location = useLocation();

    const displayMenu = () => {
        setDisplay(!display)
    }
    
  return (
    <SidebarContainer>
      <img src={logo} alt="Logo" />
      <SidebarList>
        
        <SidebarListItem>
          <FaGripVertical style={{width: '24px', height: '27px', cursor: 'pointer'}}/>
          <NavLink to="/">Dashboard</NavLink>
        </SidebarListItem>

        <SidebarListItem>
          <NavLink to="/bookings">
            <div/>
            <FaGripVertical className='icon'/>
            <p>Bookings</p>
          </NavLink>
        </SidebarListItem>

        <SidebarListItem>
          <NavLink to="/rooms">Rooms</NavLink>
        </SidebarListItem>

        <SidebarListItem>
          <NavLink to="/users">Users</NavLink>
        </SidebarListItem>

        <SidebarListItem>
          <NavLink to="/contact">Contact</NavLink>
        </SidebarListItem>
        
      </SidebarList>



      <div>
        <p>Travl Hotel Admin Dashboard</p>
        <p>&copy; 2023 All Rights Reserved</p>
        <p>Made with ♥ by David R.</p>
      </div>
    </SidebarContainer>
  )
}
