import styled from "styled-components";

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
  padding-left: 30px;
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

const Icon = styled.div`
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border-radius: 0%;
  transition: 0.3s;

  &:hover{
    background-color: rgba(59, 153, 59, 0.25);
    border-radius: 50%;
    transition: 0.3s;
  }
  
  a, a:active, a:visited{
    color: black;
  }
`;

export { HeaderContainer, HeaderTitle, HeaderElements, Icon };