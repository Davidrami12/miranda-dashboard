// React & Router
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getDataBookings } from "../../features/bookingsSlice";

// Styled Components
import {
  Table,
  HeaderTitle,
  TableActions,
  TableFilters,
  FilterButton,
  TableButtons,
} from "../../components/styled/Tables";
import { Container } from "../../components/styled/Containers";
import { DropdownMenu } from "../../components/styled/DropdownMenu";
import { Loader } from "../../components/styled/Loader";
import { CreateButton } from "../../components/styled/Buttons";

// Components
import { BookingRow } from "../../components/bookings/BookingRow";
import { Pagination } from "../../components/pagination/Pagination";


const Bookings = () => {

  const dispatch = useDispatch();
  const { bookingsList, status } = useSelector(
    (state) => state.bookingsReducer
  );

  const [bookings, setBookings] = useState(bookingsList);
  const [currentBookings, setCurrentBookings] = useState([]);

  useEffect(() => {
    if (bookingsList.length === 0) {
      dispatch(getDataBookings());
    }
    setBookings(bookingsList);
  }, [bookingsList, dispatch]);

  const getAllBookings = () => {
    setBookings(bookingsList);
  };

  const filterByType = (type) => {
    setBookings(bookingsList.filter((booking) => booking.status === type));
  };

  // Variables for the pagination component
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingsPerPage] = useState(10);
  const indexOfLastImage = currentPage * bookingsPerPage;
  const indexOfFirstImage = indexOfLastImage - bookingsPerPage;

  // Setting the current displayed images
  useEffect(() => {
    setCurrentBookings(bookings.slice(indexOfFirstImage, indexOfLastImage));
  }, [bookings, indexOfFirstImage, indexOfLastImage]);

  return (
    <>
      <TableActions>
        <TableFilters>
          <FilterButton onClick={() => getAllBookings()}>
            All Bookings
          </FilterButton>
          <FilterButton onClick={() => filterByType("Check In")}>
            Check In
          </FilterButton>
          <FilterButton onClick={() => filterByType("Check Out")}>
            Check Out
          </FilterButton>
          <FilterButton onClick={() => filterByType("In Progress")}>
            In Progress
          </FilterButton>
        </TableFilters>
        <TableButtons>
          <CreateButton>
            <NavLink to="/newBooking">+ New Booking</NavLink>
          </CreateButton>
          <DropdownMenu
            type="white"
            options={[""]}
          ></DropdownMenu>
        </TableButtons>
      </TableActions>

      {status === "loading" ? (
        <Loader />
      ) : (
        <>
          <Container>
            <Table>
              <thead>
                <tr>
                  <HeaderTitle>Guest</HeaderTitle>
                  <HeaderTitle>Order Date</HeaderTitle>
                  <HeaderTitle>Check In</HeaderTitle>
                  <HeaderTitle>Check Out</HeaderTitle>
                  <HeaderTitle>Special Request</HeaderTitle>
                  <HeaderTitle>Room type</HeaderTitle>
                  <HeaderTitle>Status</HeaderTitle>
                </tr>
              </thead>
              <tbody>
                {currentBookings.length > 0 &&
                  currentBookings.map((booking, index) => (
                    <BookingRow
                      key={booking.id}
                      index={index}
                      booking={booking}
                      number={booking.id}
                    />
                  ))}
              </tbody>
            </Table>
          </Container>
          
        </>
      )}
    </>
  );
};

export default Bookings;