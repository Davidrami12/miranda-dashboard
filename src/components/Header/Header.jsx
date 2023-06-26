import React from 'react'
import { styled } from 'styled-components'
import { useLocation } from 'react-router-dom'
import { FaBars, FaRegEnvelope, FaRegBell, FaSignOutAlt } from 'react-icons/fa';

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
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;



export const Header = () => {

  let location = useLocation();

  const getNavBarTitle = (currentRoute) => {
    if (!currentRoute)
      return "Dashboard";
    return currentRoute.toUpperCase().charAt(0) + currentRoute.slice(1);
  }

  return (
    <HeaderContainer>
      <HeaderElements>
        <FaBars style={{width: '24px', height: '27px', cursor: 'pointer'}}/>
        <HeaderTitle>
          {getNavBarTitle(location.pathname.split('/')[1])}
        </HeaderTitle>
        <FaRegEnvelope style={{width: '24px', height: '27px'}} />
        <FaRegBell style={{width: '24px', height: '27px'}} />
        <FaSignOutAlt style={{width: '24px', height: '27px', cursor: 'pointer'}} />
      </HeaderElements>
      
    </HeaderContainer>
  )
}