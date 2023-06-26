import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';


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
`;

const SidebarList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SidebarListItem = styled.li`
  margin-bottom: 10px;
  padding: 2rem;
`;


export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarListItem>
          <Link to="/">Dashboard</Link>
        </SidebarListItem>
        <SidebarListItem>
          <Link to="/rooms">Rooms</Link>
        </SidebarListItem>
        <SidebarListItem>
          <Link to="/bookings">Bookings</Link>
        </SidebarListItem>
        <SidebarListItem>
          <Link to="/users">Users</Link>
        </SidebarListItem>
      </SidebarList>
    </SidebarContainer>
  )
}
