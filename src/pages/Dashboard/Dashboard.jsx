import React from 'react'
import { KPI, KPIContainer } from '../../components/Blocks/KPI'
import { styled } from 'styled-components'
import { MdOutlineBedroomParent, MdCalendarMonth } from "react-icons/md"
import { RiLogoutBoxFill, RiLogoutBoxRFill } from "react-icons/ri"

const DashboardContainer = styled.div`
  background-color: lightgreen;
  padding: 50px;
  font-family: var(--font-Poppins);
  display: flex;
  flex-wrap: wrap;
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













    </DashboardContainer>
  )
}
