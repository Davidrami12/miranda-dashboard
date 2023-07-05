import React from 'react'
import { Table } from '../../components/styled/Tables'
import bookingsData from '../../data/bookings.json'

export const Bookings = () => {

  const cols = ["guest", "order date", "check in", "check out", "special request", "room type", "status"];

  const renderCell = (cols, bookingsData) => {
    if (cols === 'status') {
      let color;
      switch(bookingsData[cols]){
        case 'booked':
          color = 'green';
          break;
        case 'refund':
          color = 'red';
          break;
        case 'in progress':
          color = 'orange';
          break;
        default:
          color = 'black';
      }
      return (
        <span style={{color: color}}>
          {bookingsData[cols]}
        </span>
      )
    } else if (cols === 'special request') {
      return (
        <button onClick={() => handleRequest(bookingsData.requestId)}>
          {bookingsData[cols]}
        </button>
      )
    } else {
      return bookingsData[cols];
    }
  }

  const handleRequest = (requestId) => {
    // Handle the click event here
  }

  return (
    <div>
      <div>Bookings</div>
      <div>
        <Table data={bookingsData} cols={cols} renderCell={renderCell} />
      </div>
    </div>
  )
}