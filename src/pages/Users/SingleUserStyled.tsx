import styled, { css } from "styled-components";

const Subcontainer = styled.div`
  width: 50%;
  border-radius: 1.2rem;
  padding: 4rem 4rem 4rem 4rem;
`;

const BookingDataContainer = styled.div`
  margin: 4rem;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  gap: 5rem;
`;

const BookingDataSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Info = styled.p`
  text-decoration: underline;
  display: flex;
  font-family: var(--font-poppins);
  font-size: 2rem;
  font-weight: 500;
  color: #393939;
  margin: 1rem 0rem 1rem 0rem;
`;

const InfoContainer = styled.p`
  text-decoration: none;
  color: #799283;
  font-size: 1.8rem;
  font-family: var(--font-poppins);
  margin-left: 2rem;
`;

const Title = styled.p`
  text-decoration: underline;
  text-align: center;
  font-family: var(--font-poppins);
  font-size: 2.4rem;
  font-weight: 400;
  color: #212121;
  margin-bottom: 1rem;
`;
const Data = styled.p`
  text-align: center;
  font-family: var(--font-poppins);
  font-size: 2rem;
  font-weight: 500;
  color: #799283;
  margin: 0;
  span {
    font-size: 1.4rem;
    font-weight: 400;
    color: #799283;
    margin: 0;
  }
`;

const UserStatus = styled.p<{ state: string }>`
  ${(props) => {
    switch (props.state) {
      case "ACTIVE":
        return css`
          color: #5AD07A;
        `;
      case "INACTIVE":
        return css`
          color: #E23428;
        `;
      default:
        return css`
          color: #393939;
        `;
    }
  }}
  
  text-align: center;
  font-family: var(--font-poppins);
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
`;


const Text = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.4rem;
  font-weight: 400;
  color: #363636;
  margin: 0;
  padding: 0 4rem 0 4rem;
`;

const Divider = styled.div`
  height: 1px;
  margin-left: 4rem;
  background-color: #d4d4d4;
`;

export {
  Subcontainer,
  BookingDataContainer,
  BookingDataSubcontainer,
  Info,
  InfoContainer,
  Title,
  Data,
  UserStatus,
  Divider,
  Text,
};