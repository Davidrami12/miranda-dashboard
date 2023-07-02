import React from 'react'
import { Table } from '../../components/StyledComponents/Table'
import usersData from '../../data/users.json'

export const Users = () => {

  const cols = ["photo", "full name", "ID", "email", "start date", "description", "contact", "status"];

  const renderCell = (col, rowData) => {
    if (col === 'status') {
      return (
        <span style={rowData[col] === 'active' ? {color: 'green'} : {color: 'red'}}>
          {rowData[col].toUpperCase()}
        </span>
      )
    } else {
      return rowData[col];
    }
  }

  return (
    <div>
      <div>Users</div>
      <div>
        <Table data={usersData} cols={cols} renderCell={renderCell} />
      </div>
    </div>
  )
}
