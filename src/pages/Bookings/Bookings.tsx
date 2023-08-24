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
import { Modal } from "../../components/styled/Modal";
import { Pagination } from "../../components/pagination/Pagination";
import { Notification } from "../../components/notification/Notification";

// TypeScript
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { BookingInterface } from "../../interfaces/BookingInterface";

type BookingsType = {
  bookingsList: BookingInterface[];
};

type StatusType = {
  status: string;
};

export const Bookings = () => {

  const dispatch = useAppDispatch();
  const { bookingsList } = useAppSelector<BookingsType>(
    (state) => state.bookingsReducer
  );
  
  const { status } = useAppSelector<StatusType>(
    (state) => state.bookingsReducer
  );

  const [bookings, setBookings] = useState(bookingsList);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");
  const [activeFilter, setActiveFilter] = useState("Order Date");
  const [currentBookings, setCurrentBookings] = useState<BookingInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect hook runs whenever 'bookingsList' or 'dispatch' changes
  useEffect(() => {
    if(status === "idle"){
      dispatch(getDataBookings());
    }else if(status === "pending"){
      setIsLoading(true);
    }else if(status === "success"){
      setIsLoading(false);
      setBookings(bookingsList);
    }else if(status === "rejected"){
      setIsLoading(false);
      Notification("Error. The action was rejected by the API.", "error")
    }
  }, [bookingsList, dispatch]);

  const getAllBookings = () => {
    setBookings(bookingsList);
  };

  const filterByType = (type: string): void => {
    setBookings(bookingsList.filter((booking) => booking.status === type));
  };

  useEffect(() => {
    const orderedBookings = [...bookingsList];
    switch (activeFilter) {
      case "Order Date":
        orderedBookings.sort((a, b) => {
          let dateA: Date = new Date(a.orderDate);
          let dateB: Date = new Date(b.orderDate);
          return dateA.getTime() - dateB.getTime();
        });
        break;
      case "Guest":
        orderedBookings.sort((a, b) => {
          const nameA = a.userName.toUpperCase().replace(/\s/g, "");
          const nameB = b.userName.toUpperCase().replace(/\s/g, "");
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        break;
      case "Check In":
        orderedBookings.sort((a, b) => {
          const dateA = new Date(a.checkIn);
          const dateB = new Date(b.checkIn);
          return Number(dateA) - Number(dateB); 
        });
        break;
      case "Check Out":
        orderedBookings.sort((a, b) => {
          const dateA = new Date(a.checkOut);
          const dateB = new Date(b.checkOut);
          return Number(dateA) - Number(dateB);
        });
        break;
      default:
        break;
    }
    setBookings(orderedBookings);
  }, [activeFilter, bookingsList]);

  const closeModal = (): void => {
    setOpenModal(false);
  };

  const handleOpenModal = (name: string, request: string, e: any): void => {
    if (e && e.stopPropagation) e.stopPropagation();
    setOpenModal(true);
    setName(name);
    setRequest(request);
  };


  const [currentPage, setCurrentPage] = useState<number>(1);
  const [bookingsPerPage] = useState<number>(5);
  const indexOfLastImage: number = currentPage * bookingsPerPage;
  const indexOfFirstImage: number = indexOfLastImage - bookingsPerPage;
  
  // useEffect hook runs whenever 'bookings', 'indexOfFirstImage' or 'indexOfLastImage' changes
  useEffect(() => {
    setCurrentBookings(bookings.slice(indexOfFirstImage, indexOfLastImage));
  }, [bookings, indexOfFirstImage, indexOfLastImage]);

  const nPages: number = Math.ceil(bookings.length / bookingsPerPage);

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
            setActiveFilter={setActiveFilter}
            type="white"
            options={["Order Date", "Guest", "Check In", "Check Out"]}
          ></DropdownMenu>
        </TableButtons>
      </TableActions>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Container>
            {openModal ? (
              <Modal
                name={name}
                request={request}
                closeModalHandler={closeModal}
              />
            ) : null}
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
                {currentBookings.length > 0 && currentBookings.map((booking, index) => {
                  if(!booking._id) return null;
                  return (
                    <BookingRow
                      key={booking._id}
                      index={index}
                      booking={booking}
                      number={booking._id}
                      handleOpenModal={handleOpenModal}
                    />
                  );
                })}
              </tbody>
            </Table>
          </Container>

          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            dataDisplayed={"bookings"}
            total={bookings.length}
            indexOfFirstImage={indexOfFirstImage}
            indexOfLastImage={indexOfLastImage}
          />
        </>
      )}
    </>
  );
};