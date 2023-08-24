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
import { Notification } from "../../components/notification/Notification";

// TypeScript
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { UserInterface } from "../../interfaces/UserInterface";

type UsersType = {
  usersList: UserInterface[];
};

type StatusType = {
  status: string;
};

export const Users = () => {
  
  const dispatch = useAppDispatch();
  const { usersList } = useAppSelector<UsersType>(
    (state) => state.usersReducer
  );

  const { status } = useAppSelector<StatusType>(
    (state) => state.usersReducer
  );


  const [users, setUsers] = useState<UserInterface[]>(usersList);
  const [activeFilter, setActiveFilter] = useState<string>("Name");
  const [currentUsers, setCurrentUsers] = useState<UserInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect hook runs whenever 'usersList' or 'dispatch' changes
  useEffect(() => {
    if(status === "idle"){
      dispatch(getDataUsers());
    }else if(status === "pending"){
      setIsLoading(true);
    }else if(status === "success"){
      setIsLoading(false);
      setUsers(usersList);
    }else if(status === "rejected"){
      setIsLoading(false);
      Notification("Error. The action was rejected by the API.", "error")
    }
  }, [usersList, dispatch]);

  const getAllUsers = (): void => {
    setUsers(usersList);
  };

  const filterByType = (type: string): void => {
    setUsers(usersList.filter((user) => user.state === type));
  };

  useEffect(() => {
    const orderedUsers: UserInterface[] = [...usersList];
    switch (activeFilter) {
      case "Start date":
        orderedUsers.sort((a: UserInterface, b: UserInterface) => {
          let dateA: string = a.date;
          let dateB: string = b.date;
          if (dateB.split("/").join() > dateA.split("/").join()) {
            return -1;
          } else {
            return 1;
          }
        });
        break;
      case "Name":
        orderedUsers.sort((a: UserInterface, b: UserInterface) => {
          const nameA: string = a.name.toUpperCase().replace(/\s/g, "");
          const nameB: string = b.name.toUpperCase().replace(/\s/g, "");
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage] = useState<number>(10);
  const indexOfLastImage: number = currentPage * usersPerPage;
  const indexOfFirstImage: number = indexOfLastImage - usersPerPage;
  
  // Setting the current displayed images
  useEffect(() => {
    setCurrentUsers(users.slice(indexOfFirstImage, indexOfLastImage));
  }, [users, indexOfFirstImage, indexOfLastImage]);

  const nPages: number = Math.ceil(users.length / usersPerPage);

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
            options={["Name", "Start date"]}
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
                  <HeaderTitle>Name</HeaderTitle>
                  <HeaderTitle>Job Desk</HeaderTitle>
                  <HeaderTitle>Contact</HeaderTitle>
                  <HeaderTitle>Status</HeaderTitle>
                </tr>
              </thead>
              <tbody>
                {currentUsers.length > 0 && currentUsers.map((user, index) => {
                  if(!user._id) return null;
                  return(
                    <UserRow
                      key={user._id}
                      index={index}
                      user={user}
                      number={user._id}
                    />
                  );
                })};
              </tbody>
            </Table>
          </Container>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            dataDisplayed={"employees"}
            total={users.length}
            indexOfFirstImage={indexOfFirstImage}
            indexOfLastImage={indexOfLastImage}
          />
        </>
      )}
    </>
  );
};