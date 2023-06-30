import React from 'react'
import { useState } from 'react'
import { KPI, KPIContainer } from '../../components/StyledComponents/KPI'
import { styled } from 'styled-components'
import { MdOutlineBedroomParent, MdCalendarMonth } from "react-icons/md"
import { RiLogoutBoxFill, RiLogoutBoxRFill } from "react-icons/ri"
import reviews from '../../data/reviews.json'

const DashboardContainer = styled.div`
  margin: 30px;
`;

const ReviewsBox = styled.div`
  padding: 40px;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 20px;

  h1 {
    font-family: Poppins, sans-serif;
    font-size: 20px;
    color: #393939;
    margin-bottom: 25px;
  }
`;

const ReviewsContainer = styled.div`
  display: flex;
  gap: 30px;
  -webkit-box-align: center;
  align-items: center;
  transform: translate(0px);
  transition: transform 600ms ease 0s;
  background: #FFFFFF 0% 0% no-repeat padding-box;

  :hover{
    background-color: red;
    background: #FFFFFF;
    box-shadow: 0px 16px 30px #00000014;
  }
`;

const Review = styled.div`
  border-radius: 20px;
  padding: 20px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 1px solid #EBEBEB;

  max-width: 400px;
`;

export const Dashboard = () => {


  return (
    <DashboardContainer>
      <KPIContainer>
        <KPI>
          <div className='kpi-icon'>
            <MdOutlineBedroomParent style={{width: 30, height: 30}}/>
          </div>
          
          <div className='kpi-text'>
            <h2>8,461</h2>
            <p>New Booking</p>
          </div>
        </KPI>


        <KPI>
          <div className='kpi-icon'>
            <MdCalendarMonth style={{width: 30, height: 30}}/>
          </div>
          
          <div className='kpi-text'>
            <h2>963</h2>
            <p>Scheduled Rooms</p>
          </div>
        </KPI>


        <KPI>
          <div className='kpi-icon'>
            <RiLogoutBoxRFill style={{width: 30, height: 30}}/>
          </div>
          
          <div className='kpi-text'>
            <h2>753</h2>
            <p>Check In</p>
          </div>
        </KPI>


        <KPI>
          <div className='kpi-icon'>
            <RiLogoutBoxFill style={{width: 30, height: 30}}/>
          </div>
          
          <div className='kpi-text'>
            <h2>516</h2>
            <p>Check Out</p>
          </div>
        </KPI>

      </KPIContainer>
      

      <ReviewsBox>
        <h1>Latest Review by Customers</h1>

        <ReviewsContainer>

          {reviews.map((review, index) => (
            <Review key={index}>
              <p>{review.comment}</p>
              <p><b>{review.customer}</b></p>
              <p>{review.email}</p>
              <p>{review.phone}</p>
            </Review>
          ))}

        </ReviewsContainer>
      </ReviewsBox>

    </DashboardContainer>
  )
}
