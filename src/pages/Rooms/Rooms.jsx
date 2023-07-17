// React
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// DnD
// import { DragDropContext, Droppable } from "react-beautiful-dnd";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getDataRooms } from "../../features/roomsSlice";

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
import { CreateButton } from "../../components/styled/Buttons";
import { DropdownMenu } from "../../components/styled/DropdownMenu";
import { Loader } from "../../components/styled/Loader";

// Components
import { RoomRow } from "../../components/rooms/RoomRow";
import { Pagination } from "../../components/pagination/Pagination";

// Component that creates a table and add a row for each item in the data base
export const Rooms = () => {
  const dispatch = useDispatch();
  const { roomsList, status } = useSelector((state) => state.roomsReducer);

  const [rooms, setRooms] = useState(roomsList);
  const [activeFilter, setActiveFilter] = useState("Room Nº.");
  const [currentRooms, setCurrentRooms] = useState([]);

  useEffect(() => {
    if (roomsList.length === 0) {
      dispatch(getDataRooms());
    }
    setRooms(roomsList);
  }, [roomsList, dispatch]);
  

  const getAllRooms = () => {
    setRooms(roomsList);
  };

  const filterByType = (type) => {
    setRooms(roomsList.filter((room) => room.room_status === type));
  };

  useEffect(() => {
    // Filtering by dropdown selection based on the filtered by search input array
    const orderedRooms = [...roomsList];
    switch (activeFilter) {
      case "Room Number":
        orderedRooms.sort((a, b) => a.room_number - b.room_number);
        break;
      case "Highest rate":
        orderedRooms.sort((a, b) => b.room_rate - a.room_rate);
        break;
      case "Lowest rate":
        orderedRooms.sort((a, b) => a.room_rate - b.room_rate);
        break;
      default:
        break;
    }
    setRooms(orderedRooms);
  }, [activeFilter, roomsList]);

  // Variables for the pagination component
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(10);
  const indexOfLastImage = currentPage * roomsPerPage;
  const indexOfFirstImage = indexOfLastImage - roomsPerPage;
  
  useEffect(() => {
    setCurrentRooms(rooms.slice(indexOfFirstImage, indexOfLastImage));
  }, [rooms, indexOfFirstImage, indexOfLastImage]);

  const nPages = Math.ceil(rooms.length / roomsPerPage);

  return (
    <>
      <TableActions>
        <TableFilters>
          <FilterButton onClick={getAllRooms}>All Rooms</FilterButton>
          <FilterButton onClick={() => filterByType("Available")}>
            Available Rooms
          </FilterButton>
          <FilterButton onClick={() => filterByType("Booked")}>
            Booked Rooms
          </FilterButton>
        </TableFilters>
        <TableButtons>
          <CreateButton>
            <NavLink to="/newRoom">+ New Room</NavLink>
          </CreateButton>
          <DropdownMenu
            setActiveFilter={setActiveFilter}
            type="white"
            options={["Room Nº", "Highest rate", "Lowest rate"]}
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
                  <HeaderTitle>Room Name</HeaderTitle>
                  <HeaderTitle>Bed Type</HeaderTitle>
                  <HeaderTitle>Facilities</HeaderTitle>
                  <HeaderTitle>Rate</HeaderTitle>
                  <HeaderTitle>Offer Price</HeaderTitle>
                  <HeaderTitle>Status</HeaderTitle>
                </tr>
              </thead>
              <>
                <tbody
                  className="task-container"
                >
                  {currentRooms.length > 0 &&
                    currentRooms.map((room, index) => (
                      <RoomRow
                        key={room.id}
                        index={index}
                        room={room}
                        number={room.id}
                      />
                    ))}
                </tbody>
              </>
            </Table>
          </Container>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            dataDisplayed={"rooms"}
            total={rooms.length}
            indexOfFirstImage={indexOfFirstImage}
            indexOfLastImage={indexOfLastImage}
          />
        </>
      )}
    </>
  );
};