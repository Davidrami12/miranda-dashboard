import styled, { css } from "styled-components";

const Row = styled.tr`
  border-top: 1px solid #d4d4d4;
  transition: box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 30px #00000014;
  }
`;

const GuestContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8rem;
  margin-left: 4rem;

  img {
    border-radius: 8px;
    width: 4.5rem;
    min-width: 4.5rem;
    height: 4.5rem;
    min-height: 4.5rem;
    object-fit: cover;
  }
`;

const GuestName = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 500;
  color: #393939;
  margin: 0;
`;

const BookingID = styled.p`
  color: #799283;
  font-size: 1.4rem;
  font-family: var(--font-poppins);
  margin: 0;
`;

const DataContainer = styled.td`
  vertical-align: middle;
  div {
    padding-left: 4rem;
    svg {
      fill: #135846;
    }
  }
  p {
    font-family: var(--font-poppins);
    color: #393939;
    font-size: 1.6rem;
    max-width: 30rem;
    padding-left: 4rem;
  }
`;

const DataContainerButton = styled.td`
  vertical-align: top;
  padding-right: 30px;

  button {
    background-color: transparent;
    border: none;
    margin: 1.5rem 2rem 0 4rem;
    width: 24px;
    height: 24px;
    cursor: pointer;
    padding: 0;
    font-family: var(--font-poppins);
    font-size: 1.6rem;
    &.green {
      color: #5ad07a;
    }
    &.red {
      color: #e23428;
    }
  }
`;

const NotesButton = styled.button<{ request: String }>`
  ${(props) => {
    if (props.request === "") {
      return css`
        background-color: white;
        font-family: var(--font-poppins);
        font-size: 1.6rem;
        font-weight: 400;
        width: 15rem;
        pointer-events: none;
        border: 1px solid #799283;
        color: #799283;
        border-radius: 12px;
        margin-left: 4rem;
        max-width: 16rem;
        padding: 1rem 3rem;
      `;
    } else {
      return css`
        transition: all 0.3s;
        font-family: var(--font-poppins);
        font-size: 1.6rem;
        font-weight: 600;
        width: 15rem;
        cursor: pointer;
        background-color: #eef9f2;
        color: #212121;
        border: none;
        border-radius: 12px;
        margin-left: 4rem;
        max-width: 16rem;
        padding: 1rem 3rem;
        &:hover {
          background-color: #0e3f32;
          color: white;
        }
      `;
    }
  }}
`;

const Status = styled.p<{ status: string }>`
  ${(props) => {
    switch (props.status) {
      case "Check In":
        return css`
          background-color: rgba(38, 166, 91, 0.5);
          font-family: var(--font-poppins);
          color: #393939;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.05rem;
          transition: background-color 0.3s;
          :hover {
            background-color: rgba(38, 166, 91, 1);
          }
        `;
      case "Check Out":
        return css`
          background-color: rgba(236, 100, 75, 0.5);
          font-family: var(--font-poppins);
          color: #393939;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.05rem;
          transition: background-color 0.3s;
          :hover {
            background-color: rgba(236, 100, 75, 1);
          }
        `;
      case "In Progress":
        return css`
          background-color: rgba(254, 241, 96, 0.5);
          font-family: var(--font-poppins);
          color: #393939;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.05rem;
          transition: background-color 0.3s;
          :hover {
            background-color: rgba(254, 241, 96, 1);
          }
        `;
      default:
        return css`
          background-color: blue;
          font-family: var(--font-poppins);
          color: #393939;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.05rem;
        `;
    }
  }}
  padding: 13px 25px;
  border-radius: 12px;
  text-align: center;
  margin-left: 30px;
`;

export {
  Row,
  GuestContainer,
  GuestName,
  BookingID,
  DataContainer,
  DataContainerButton,
  NotesButton,
  Status,
};