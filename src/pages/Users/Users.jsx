// React & Router
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getDataUsers } from "../../features/usersSlice";

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
import { UserRow } from "../../components/users/UserRow";
import { Pagination } from "../../components/pagination/Pagination";

// Component that creates a table and add a row for each item in the data base
const Users = () => {
  const dispatch = useDispatch();
  const { usersList, status } = useSelector((state) => state.usersReducer);

  const [users, setUsers] = useState(usersList);
  const [activeFilter, setActiveFilter] = useState("Start date");
  const [currentUsers, setCurrentUsers] = useState([]);

  // Faking a delay on data fetch
  useEffect(() => {
    if (usersList.length === 0) {
      setTimeout(() => {
        dispatch(getDataUsers());
      }, 1000);
    }
    setUsers(usersList);
  }, [usersList, dispatch]);

  const getAllUsers = () => {
    setUsers(usersList);
  };

  const filterByType = (type) => {
    setUsers(usersList.filter((user) => user.state === type));
  };

  useEffect(() => {
    const orderedUsers = [...usersList];
    switch (activeFilter) {
      case "Start date":
        orderedUsers.sort((a, b) => {
          let dateA = a.date;
          let dateB = b.date;
          if (dateB.split("/").join() > dateA.split("/").join()) {
            return -1;
          } else {
            return 1;
          }
        });
        break;
      case "Name":
        orderedUsers.sort((a, b) => {
          const nameA = a.name.toUpperCase().replace(/\s/g, "");
          const nameB = b.name.toUpperCase().replace(/\s/g, "");
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        break;
    }
    setUsers(orderedUsers);
  }, [activeFilter, usersList]);

  // Variables for the pagination component
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const indexOfLastImage = currentPage * usersPerPage; // For example: let´s say we have 17 pages. indexOfLastImage = 17 * roomsPerPage
  const indexOfFirstImage = indexOfLastImage - usersPerPage; // Following same example: indexOfFirstImage = indexOfLastPage – roomsPerPage
  // Setting the current displayed images
  useEffect(() => {
    setCurrentUsers(users.slice(indexOfFirstImage, indexOfLastImage));
  }, [users, indexOfFirstImage, indexOfLastImage]);

  // Images to be displayed on the current page. slice(96, 102) will return images from index 96 to 101
  const nPages = Math.ceil(users.length / usersPerPage);

  return (
    <>
      <TableActions>
        <TableFilters>
          <FilterButton onClick={getAllUsers}>All Employees</FilterButton>
          <FilterButton onClick={() => filterByType("ACTIVE")}>
            Active Employees
          </FilterButton>
          <FilterButton onClick={() => filterByType("INACTIVE")}>
            Inactive Employees
          </FilterButton>
        </TableFilters>
        <TableButtons>
          <CreateButton>
            <NavLink to="/newUser">+ New User</NavLink>
          </CreateButton>
          <DropdownMenu
            setActiveFilter={setActiveFilter}
            type="white"
            options={["Start date", "Name"]}
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
                  <HeaderTitle>Name</HeaderTitle>
                  <HeaderTitle>Job Desk</HeaderTitle>
                  <HeaderTitle>Contact</HeaderTitle>
                  <HeaderTitle>Status</HeaderTitle>
                </tr>
              </thead>
              <tbody>
                {currentUsers.length > 0 &&
                  currentUsers.map((user, index) => (
                    <UserRow
                      key={user.id}
                      index={index}
                      user={user}
                      number={user.id}
                    />
                  ))}
              </tbody>
            </Table>
          </Container>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            dataDisplayed={"employees"}
            totalRooms={users.length}
            indexOfFirstImage={indexOfFirstImage}
            indexOfLastImage={indexOfLastImage}
          />
        </>
      )}
    </>
  );
};

export default Users;