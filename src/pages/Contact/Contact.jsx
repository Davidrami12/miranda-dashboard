import React from 'react'
import { Table } from '../../components/styled/Tables'
import contactData from '../../data/contact.json'

export const Contact = () => {

  const cols = ["id", "date", "customer", "comment", "button"];

  const renderCell = (col, rowData) => {
    if (col === 'button') {
      return (
        <span style={rowData[col] === 'publish' ? {color: 'green'} : {color: 'red'}}>
          {rowData[col].toUpperCase()}
        </span>
      )
    } else {
      return rowData[col];
    }
  }

  return (
    <div>
      <div>Contact</div>
      <div>
        <Table data={contactData} cols={cols} renderCell={renderCell} />
      </div>
    </div>
  )
}
