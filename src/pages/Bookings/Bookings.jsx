import React, { useState, useEffect } from "react";
import { Table } from '../../components/styled/Table'
import bookingsData from '../../data/bookings.json'

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getDataBookings } from "../../features/bookingsSlice";

export const Bookings = () => {
  const dispatch = useDispatch();
  const { bookingsList, status } = useSelector(
    (state) => state.bookingsReducer
  );

  const [bookings, setBookings] = useState(bookingsList);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");
  const [activeFilter, setActiveFilter] = useState("Order Date");
  const [currentBookings, setCurrentBookings] = useState([]);

  // Faking a delay on data fetch
  useEffect(() => {
    if (bookingsList.length === 0) {
      setTimeout(() => {
        dispatch(getDataBookings());
      }, 1000);
    }
    setBookings(bookingsList);
  }, [bookingsList, dispatch]);


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
      <div>Users</div>
      <div>
        <Table data={bookingsData} cols={cols} renderCell={renderCell} />
      </div>
    </div>
  )
}
