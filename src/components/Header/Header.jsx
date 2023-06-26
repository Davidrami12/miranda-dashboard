import React from 'react'
import { styled } from 'styled-components'
import { useLocation } from 'react-router-dom'

const HeaderContainer = styled.div`
  background-color: red;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 120px;
  display: flex;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 3px 10px;
  align-items: center;
  justify-content: center;
  opacity: 1;
`

const HeaderTitle = styled.div`
  text-align: left;
  font: normal normal 600 28px/42px Poppins;
`



export const Header = () => {

  let location = useLocation();

  const getNavBarTitle = (currentRoute) => {
    if (!currentRoute)
      return "Dashboard";
    return currentRoute.toUpperCase().charAt(0) + currentRoute.slice(1);
  }

  return (
    <HeaderContainer>
      <HeaderTitle>{getNavBarTitle(location.pathname.split('/')[1])}</HeaderTitle>
    </HeaderContainer>
  )
}