import styled, { css } from "styled-components";

const GuestContainer = styled.div`
  display: flex;
  //align-items: center;
  gap: 2.8rem;
  margin-left: 3rem;
  img {
    border-radius: 8px;
    width: 7rem;
    min-width: 7rem;
    height: 7rem;
    min-height: 7rem;
    object-fit: cover;
  }
`;

const GuestName = styled.p`
  font-family: var(--font-poppins);
  font-size: 4rem;
  font-weight: 500;
  color: #393939;
  margin-bottom: 1rem;
`;

const BookingID = styled.p`
  color: #799283;
  font-size: 1.4rem;
  font-family: var(--font-poppins);
  margin: 0;
`;

const Subcontainer = styled.div`
  width: 50%;
  border-radius: 1.2rem;
  padding: 4rem 4rem 4rem 0;
`;

const BookingDataContainer = styled.div`
  margin: 4rem;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

const BookingDataSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Title = styled.p`
  font-family: var(--font-poppins);
  font-size: 2rem;
  font-weight: 400;
  color: #6e6e6e;
  margin: 0;
`;
const Data = styled.p`
  font-family: var(--font-poppins);
  font-size: 2.4rem;
  font-weight: 500;
  color: #212121;
  margin: 0;
  span {
    font-size: 1.4rem;
    font-weight: 400;
    color: #799283;
    margin: 0;
  }
`;

const Text = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.5rem;
  font-weight: 400;
  color: #363636;
  margin: 0;
  padding: 0 4rem 0 4rem;
`;

const Facilities = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1rem;
  div {
    min-width: fit-content;
    background-color: #eef9f2;
    font-family: var(--font-poppins);
    font-size: 1.4rem;
    font-weight: 500;
    color: #135846;
    border-radius: 1.2rem;
    padding: 1.5rem 2rem;
    text-align: center;
    vertical-align: middle;
    svg {
      vertical-align: middle;
      fill: #135846;
      margin-right: 1rem;
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  margin-left: 4rem;
  background-color: #d4d4d4;
`;

const SwiperContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: stretch;
  justify-content: stretch;

  .roomData {
    position: relative;
    font-family: var(--font-poppins);
    background: white;
    //background: linear-gradient(to top, #333333, #787878);
    padding: 5rem 5rem 5rem 5rem;
    height: auto;
    border-radius: 0 0 1.2rem 0;

    h2 {
      font-size: 3rem;
      font-weight: 500;
      color: black;
      margin: 0;
    }
    p {
      font-size: 1.4rem;
      font-weight: 400;
      color: black;
      margin: 0;
      margin-top: 1rem;
    }
  }
  .swiper {
    height: fit-content;
  }
  .swiper-slide {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    border-radius: 0 1.2rem 1.2rem 0;
    height: 100%;
    width: 100% !important;

    img {
      border-radius: 0 1.2rem 0 0;
      height: 60rem;
      width: 100%;
      object-fit: cover;
    }
  }
  .swiper-button-prev {
    left: 5rem;
  }
  .swiper-button-next {
    right: 5rem;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 90%;
    background-color: #c5c5c5;
    border-radius: 1.2rem;
    color: white;
    height: 5.6rem;
    width: 5.6rem;
    :after {
      font-size: 1rem;
      font-weight: 600;
    }
    :hover {
      border: 1px solid #ffffff;
    }
  }
`;

const Tag = styled.div<{ currentStatus: string }>`
  position: absolute;
  right: -6rem;
  top: 2rem;
  font-family: var(--font-poppins);
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  padding: 1rem 7rem;
  transform: rotate(45deg);
  z-index: 2;
  ${(props) => {
    switch (props.currentStatus) {
      case "Check In":
        return css`
          background-color: green;
        `;
      case "Available":
        return css`
          background-color: #5AD07A;
        `;
      case "Check Out":
        return css`
          background-color: #E23428;
        `;
      case "Booked":
        return css`
          background-color: #E23428;
        `;
      case "In Progress":
        return css`
          background-color: #fce205;
          color: #363636;
        `;
      default:
        return css`
          background-color: pink;
          color: white;
        `;
    }
  }}
`;

export {
  GuestContainer, 
  GuestName,
  BookingID,
  Subcontainer,
  BookingDataContainer,
  BookingDataSubcontainer,
  Title,
  Data,
  Divider,
  Text,
  Facilities,
  SwiperContainer,
  Tag,
};