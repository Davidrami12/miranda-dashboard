import styled from "styled-components";

const Row = styled.tr`
  border-top: 1px solid #d4d4d4;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: white;
    box-shadow: 0px 4px 30px #00000014;
  }
`;

const RoomNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8rem;
  padding: 2.2rem 0 2.2rem 4rem;
  img {
    border-radius: 8px;
    width: 150px;
    height: 77px;
    object-fit: cover;
  }

  div {
    text-align: center;
  }
`;

const RoomId = styled.p`
  text-align: left;
  padding-bottom: 10px;
  font-size: 1.4rem;
  color: #799283;
  font-family: var(--font-poppins);
  margin: 0;
`;

const RoomNumber = styled.p`
  text-align: left;
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 400;
  color: #393939;
  margin: 0;
`;

const DataContainer = styled.td`
  vertical-align: middle;
`;

const DataContainerButton = styled.td`
  vertical-align: middle;
  padding-right: 30px;
  position: relative;
  button {
    background-color: transparent;
    border: none;
    margin-left: 30px;
    &:focus {
      outline: none;
    }
    svg {
      cursor: pointer;
    }
  }
`;

const RoomText = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 400;
  color: #393939;
  padding-left: 4rem;
  max-width: 30rem;
`;

const RoomPrice = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 600;
  padding-left: 4rem;
  max-width: 30rem;
  color: #212121;
  span {
    font-size: 1.4rem;
    color: #799283;
  }
`;

const RoomStatus = styled.p`
  background-color: ${(props) => props.status};
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 400;
  color: white;
  padding: 1.3rem 2.5rem;
  border-radius: 12px;
  text-align: center;
  margin-left: 4rem;
`;

const DropDown = styled.div`
  display: block;
  position: absolute;
  //background-color: #777777;
  background-color: white;
  top: 60%;
  right: 0%;
  z-index: 2;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      text-decoration: none;
      button {
        margin: 0;
        width: 100%;
        height: fit-content;
        padding: 10px 15px;
        display: block;
        border: 1px solid #d4d4d4;
        //color: white;
        color: black;
        font-family: var(--font-poppins);
        transition: all 0.3s;
        &:hover {
          //background-color: #c5c5c5;
        }
      }
    }
  }
`;

export {
  Row,
  RoomNameContainer,
  RoomId,
  RoomNumber,
  DataContainer,
  DataContainerButton,
  RoomText,
  RoomPrice,
  RoomStatus,
  DropDown,
};