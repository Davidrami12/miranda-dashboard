import React from 'react'
import { Table } from '../../components/StyledComponents/Table'
import contactData from '../../data/rooms.json'

export const Rooms = () => {

  const cols = ["photo", "room number", "ID", "bed type", "room floor", "facilities", "price", "status"];

  const renderCell = (col, rowData) => {
    if (col === 'status') {
      return (
        <span style={rowData[col] === 'available' ? {color: 'green'} : {color: 'red'}}>
          {rowData[col].toUpperCase()}
        </span>
      )
    } else {
      return rowData[col];
    }
  }

  return (
    <div>
      <div>Rooms</div>
      <div>
        <Table data={contactData} cols={cols} renderCell={renderCell} />
      </div>
    </div>
  )
}
