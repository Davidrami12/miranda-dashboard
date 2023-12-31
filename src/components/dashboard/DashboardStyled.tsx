import styled from "styled-components";

const DashboardContainer = styled.div`
  width: 96%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const KPI = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const KPIContainer = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  min-width: 270px;
  border-radius: 15px;
  background-color: white;
  justify-content: start;
  align-items: center;
  gap: 2.2rem;
  padding-left: 3rem;
  box-shadow: 0px 4px 4px #00000005;
  transition: box-shadow 0.3s;
  
  div {
    font-family: "Poppins";
    h2 {
      font-weight: 600;
      font-size: 3rem;
      color: #393939;
      margin: 0;
    }
    p {
      font-weight: 300;
      font-size: 1.4rem;
      color: #787878;
      margin: 0;
    }
  }

  & .kpi-icon{
    padding: 15px;
    background-color: rgb(255, 237, 236);
    color: red;
    border-radius: 12px;
    transition: all 0.3s;
    svg {
      //background-color: rgb(255, 237, 236);
      color: red;
      transition: all 0.3s;
    }
  }

  &:hover {
    box-shadow: 0px 16px 30px #00000014;
    transition: all 0.3s;
    .kpi-icon{
      background: #E23428 0% 0% no-repeat padding-box;
      transition: all 0.3s;
    }
    svg {
      //background-color: #e23428;
      fill: white;
      transition: all 0.3s;
    }
  }
`;



const Reviews = styled.div`
  max-width: 1200px;
  position: relative;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 2rem;
  overflow: hidden;
  p {
    margin: 3rem 0 0 3rem;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 2rem;
    color: #393939;
  }
  .swiper {
    width: 96%;
    .swiper-button-prev, .swiper-button-next {
      background-color: #135846;
      color: white;
      height: 5.6rem;
      width: 5.6rem;
      border: 1px solid #FFFFFF;
      border-radius: 25%;
      transition: all 0.2s;
      & .swiper-button-disabled{
        opacity: 0;
      }
      &:after{
        font-size: 2rem;
        font-weight: 600;
      }
      &:hover{
      background-color: #092921;
    }
    }
    .swiper-button-prev{
      left: 0;
    }
    .swiper-button-next{
      right: 0;
    }
    .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled{
      opacity: 0;
    }
  }
  .swiper-wrapper{
  }
  
  .swiper-slide {
    text-align: left;
    background: #FFFFFF;
    border: 1px solid #EBEBEB;
    border-radius: 2rem;
    animation: all 2s;
    margin: 3rem 2rem 3rem 3rem;
    width: 29.1% !important;
    transition: all 0.3s;
    &:hover{
      box-shadow: 0px 16px 30px #00000014;
    }
    p{
      font-size: 1.5rem;
      font-weight: 400;
      color:#4E4E4E;
      margin: 3rem;
    }
    .reviewUser{
      display: flex;
      text-align: left;
      margin: 0rem 3rem 3rem 3rem;
      justify-content: space-between;
      
      p{
        margin: 0;
      }

      p:first-child{
        font-weight: bolder;
      }
    }
  }
`;

export {
  DashboardContainer,
  KPI,
  KPIContainer,
  Reviews,
};