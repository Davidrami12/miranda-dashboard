import React from 'react'
import { Table } from '../../components/StyledComponents/Table'
import usersData from '../../data/users.json'

export const Users = () => {

  const cols = ["photo", "full name", "ID", "email", "start date", "description", "contact", "status"];


  return (
    <div>
      <div>Users</div>
      <div>
        <Table data={usersData} cols={cols} />
      </div>

    </div>

  )
}
