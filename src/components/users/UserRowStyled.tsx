import styled, { css } from "styled-components";

const Row = styled.tr`
  border-top: 1px solid #d4d4d4;
  transition: box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 30px #00000014;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8rem;
  margin: 2rem 0 2rem 4rem;

  img {
    border-radius: 8px;
    width: 8rem;
    min-width: 8rem;
    height: 8rem;
    min-height: 8rem;
    object-fit: cover;
  }

  svg {
    position: relative;
    top: 5px;
  }
`;
const UserName = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 500;
  color: #393939;
  margin: 0;
`;

const UserID = styled.p`
  color: #393939;
  font-size: 1.4rem;
  font-family: var(--font-poppins);
  margin: 0;
`;

const UserJoinDate = styled.p`
  color: #393939;
  font-size: 1.4rem;
  font-family: var(--font-poppins);
  margin: 0;
  line-height: 26px;
`;

const DataContainer = styled.td`
  vertical-align: middle;

  p {
    font-family: var(--font-poppins);
    color: #393939;
    font-size: 1.6rem;
    max-width: 30rem;
    padding-left: 4rem;
  }
`;

const Status = styled.p<{ state: string }>`
  ${(props) => {
    switch (props.state) {
      case "ACTIVE":
        return css`
          font-family: var(--font-poppins);
          color: #5ad07a;
          font-size: 1.4rem;
          font-weight: 600;
        `;
      case "INACTIVE":
        return css`
          font-family: var(--font-poppins);
          color: #e23428;
          font-size: 1.4rem;
          font-weight: 600;
          -color: rgba(236, 100, 75, 1);
        `;
      default:
        return css`
          font-family: var(--font-poppins);
          color: #e23428;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.05rem;
        `;
    }
  }}
  padding: 1.3rem 4rem 1.3rem 0;
  text-align: center;
  margin-left: 4rem;
  width: fit-content;
  
`;

export {
  Row,
  DataContainer,
  UserContainer,
  UserName,
  UserID,
  UserJoinDate,
  Status,
};