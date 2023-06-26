import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/rooms">Rooms</Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/bookings">Bookings</Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  )
}
