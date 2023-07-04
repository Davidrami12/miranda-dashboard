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
  img {
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    display: block;
    margin: auto;
    border-radius: 8px;
  }
`;

const UserName = styled.p`
  color: #393939;
  font-family: var(--font-poppins);
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.p`
  color: #b2b2b2;
  font-family: var(--font-poppins);
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
`;

const LinkButton = styled.div`
  background-color: #ebf1ef;
  border: none;
  border-radius: 8px;
  width: 16rem;
  height: 5rem;
  transition: background-color 0.3s;
  a {
    text-align: center;
    font-family: var(--font-poppins);
    text-decoration: none;
    color: #135846;
    font-size: 1.4rem;
    font-weight: 600;
    display: block;
    padding: 1.5rem;
  }
  :hover {
    background-color: rgba(19, 87, 69, 0.2);
  }
`;

export { Card, UserName, UserEmail, LinkButton };