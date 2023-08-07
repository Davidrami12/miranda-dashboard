import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  max-width: 20rem;
  margin: auto;
  padding: 2rem;
  border-radius: 18px;
  box-shadow: 0px 20px 30px #00000014;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;

  img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    display: block;
    margin: auto;
    border-radius: 8px;
  }

  &:hover{
    background-color: #EBF1EF;
  }
`;

const UserName = styled.p`
  color: #393939;
  font-family: var(--font-poppins);
  text-align: center;
  font-size: 1.7rem;
  font-weight: 500;
  margin-top: 0.7rem;
  margin-bottom: 0.2rem;
`;

const UserEmail = styled.p`
  color: #8e8e8e;
  font-family: var(--font-poppins);
  font-size: 1.3rem;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
`;

const LinkButton = styled.div`
  background-color: rgb(143, 213, 172);
  border: none;
  border-radius: 12px;
  width: 16rem;
  padding: 1.5rem;
  transition: all 0.5s;
  
  a {
    text-align: center;
    font-family: var(--font-poppins);
    text-decoration: none;
    color: #135846;
    font-size: 1.7rem;
    font-weight: 600;
    display: block;
  }
  
  &:hover {
    cursor: pointer;
    background-color: #155646;
    color: white;

    a{
      color: white;
    }
  }
`;

export { Card, UserName, UserEmail, LinkButton };