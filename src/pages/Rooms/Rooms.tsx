// React
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
import { Notification } from "../../components/notification/Notification";

// TypeScript
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RoomInterface } from "../../interfaces/RoomInterface";

type RoomsType = {
  roomsList: RoomInterface[];
};

type StatusType = {
  status: string;
};

export const Rooms = () => {
  
  const dispatch = useAppDispatch();
  const { roomsList } = useAppSelector<RoomsType>(
    (state) => state.roomsReducer
  );
  const { status } = useAppSelector<StatusType>((state) => state.roomsReducer);

  const [rooms, setRooms] = useState<RoomInterface[]>(roomsList);
  const [activeFilter, setActiveFilter] = useState<string>("Room Nº.");
  const [currentRooms, setCurrentRooms] = useState<RoomInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect hook runs whenever 'bookingsList' or 'dispatch' changes
  useEffect(() => {
    if(status === "idle"){
      dispatch(getDataRooms());
    }else if(status === "pending"){
      setIsLoading(true);
    }else if(status === "success"){
      setIsLoading(false);
      setRooms(roomsList);
    }else if(status === "rejected"){
      setIsLoading(false);
      Notification("Error. The action was rejected by the API.", "error")
    }
  }, [roomsList, dispatch]);

  const getAllRooms = () => {
    setRooms(roomsList);
  };

  const filterByType = (type: string): void => {
    setRooms(roomsList.filter((room) => room.room_status === type));
  };

  useEffect(() => {
    const orderedRooms = [...roomsList];
    switch (activeFilter) {
      case "Room Nº.":
        orderedRooms.sort((a, b) => Number(a.room_number) - Number(b.room_number));
        break;
      case "Highest rate":
        orderedRooms.sort((a, b) => Number(b.room_offer) - Number(a.room_offer));
        break;
      case "Lowest rate":
        orderedRooms.sort((a, b) => Number(a.room_offer) - Number(b.room_offer));
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
            options={["Room Nº.", "Highest rate", "Lowest rate"]}
          ></DropdownMenu>
        </TableButtons>
      </TableActions>

      {isLoading ? (
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
              <tbody className="task-container">
                {currentRooms.length > 0 && currentRooms.map((room, index) => {
                    if(!room._id) return null;
                    return(
                      <RoomRow
                        key={room._id}
                        index={index}
                        room={room}
                        number={room._id}
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