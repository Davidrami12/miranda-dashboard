// React
import React from "react";

// Styled Components
import {
  DashboardContainer,
  KPI,
  KPIContainer,
  Reviews,
} from "./DashboardStyled";
// Components
import ReviewsSwiper from "../../components/reviews/Reviews";

//import { KPI, KPIContainer } from '../../components/styled/KPI'
import { MdOutlineBedroomParent, MdCalendarMonth } from "react-icons/md"
import { RiLogoutBoxFill, RiLogoutBoxRFill } from "react-icons/ri"

export const Dashboard = () => {

  return (
    <DashboardContainer>
      <KPI>
        <KPIContainer>
          <div className='kpi-icon'>
            <MdOutlineBedroomParent style={{width: 35, height: 35}}/>
          </div>
          
          <div>
            <h2>8,461</h2>
            <p>New Booking</p>
          </div>
        </KPIContainer>

        <KPIContainer>
          <div className='kpi-icon'>
            <MdCalendarMonth style={{width: 35, height: 35}}/>
          </div>
          <div>
            <h2>963</h2>
            <p>Scheduled Rooms</p>
          </div>
        </KPIContainer>

        <KPIContainer>
          <div className='kpi-icon'>
            <RiLogoutBoxRFill style={{width: 35, height: 35}}/>
          </div>
          <div>
            <h2>753</h2>
            <p>Check In</p>
          </div>
        </KPIContainer>

        <KPIContainer>
          <div className='kpi-icon'>
            <RiLogoutBoxFill style={{width: 35, height: 35}}/>
          </div>
          <div>
            <h2>516</h2>
            <p>Check Out</p>
          </div>
        </KPIContainer>
      </KPI>


      {/* <Reviews>
        <p>Latest Reviews by Customers</p>
        <ReviewsSwiper></ReviewsSwiper>
      </Reviews> */}

    </DashboardContainer>
  )
}
