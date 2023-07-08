// React
import React, { useState, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getDataReviews } from "../../features/contactSlice";

// Styled Components
import { Reviews } from "../Dashboard/DashboardStyled";
import { Container } from "../../components/styled/Containers";
import {
  Table,
  HeaderTitle,
  TableActions,
  TableFilters,
  FilterButton,
  TableButtons,
} from "../../components/styled/Tables";
import { DropdownMenu } from "../../components/styled/DropdownMenu";

// Components
import ReviewsSwiper from "../../components/reviews/Reviews";
import { ReviewRow } from "../../components/reviews/ReviewRow";
import { Pagination } from "../../components/pagination/Pagination";
import { Loader } from "../../components/styled/Loader";

export const Contact = () => {
  const dispatch = useDispatch();
  const { reviewsList } = useSelector((state) => state.contactReducer);
  const { status } = useSelector((state) => state.contactReducer);

  const [reviews, setReviews] = useState(reviewsList);
  const [activeFilter, setActiveFilter] = useState("Date");
  const [currentReviews, setCurrentReviews] = useState([]);

  // Faking a delay on data fetch
  useEffect(() => {
    if (reviewsList.length === 0) {
      setTimeout(() => {
        dispatch(getDataReviews());
      }, 1000);
    }
    setReviews(reviewsList);
  }, [reviewsList, dispatch]);

  const getAllReviews = () => {
    setReviews(reviewsList);
  };

  const filterByType = (type) => {
    setReviews(reviewsList.filter((review) => review.archived === type));
  };

  useEffect(() => {
    const orderedReviews = [...reviewsList];
    switch (activeFilter) {
      case "Date":
        orderedReviews.sort((a, b) => {
          let dateA = a.date;
          let dateB = b.date;
          if (dateB.split("-").join() < dateA.split("-").join()) {
            return -1;
          } else {
            return 1;
          }
        });
        break;
      case "User":
        orderedReviews.sort((a, b) => {
          const nameA = a.user.name.toUpperCase().replace(/\s/g, "");
          const nameB = b.user.name.toUpperCase().replace(/\s/g, "");
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
    setReviews(orderedReviews);
  }, [activeFilter, reviewsList]);

  // Variables for the pagination component
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(10);
  const indexOfLastImage = currentPage * roomsPerPage;
  const indexOfFirstImage = indexOfLastImage - roomsPerPage;
  
  
  useEffect(() => {
    setCurrentReviews(reviews.slice(indexOfFirstImage, indexOfLastImage));
  }, [reviews, indexOfFirstImage, indexOfLastImage]);

  const nPages = Math.ceil(reviews.length / roomsPerPage);

  return (
    <>
      {status === "loading" ? (
        <Loader />
      ) : (
        <>
          <Container>
            <Reviews>
              <ReviewsSwiper></ReviewsSwiper>
            </Reviews>
          </Container>
          <TableActions>
            <TableFilters>
              <FilterButton onClick={() => getAllReviews()}>
                All Customer Reviews
              </FilterButton>
              <FilterButton onClick={() => filterByType(false)}>
                Published
              </FilterButton>
              <FilterButton onClick={() => filterByType(true)}>
                Archived
              </FilterButton>
            </TableFilters>
            <TableButtons>
              <DropdownMenu
                setActiveFilter={setActiveFilter}
                type="white"
                options={["Date", "User"]}
              ></DropdownMenu>
            </TableButtons>
          </TableActions>
          <Container>
            <Table>
              <thead>
                <tr>
                  <HeaderTitle>Order ID</HeaderTitle>
                  <HeaderTitle>Date</HeaderTitle>
                  <HeaderTitle>Customer</HeaderTitle>
                  <HeaderTitle>Comment</HeaderTitle>
                  <HeaderTitle>Action</HeaderTitle>
                </tr>
              </thead>
              <tbody className="task-container">
                {currentReviews.length > 0 &&
                  currentReviews.map((review, index) => (
                    <ReviewRow
                      key={review.id}
                      index={index}
                      review={review}
                      number={review.id}
                    />
                  ))}
              </tbody>
            </Table>
          </Container>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            dataDisplayed={"reviews"}
            total={reviews.length}
            indexOfFirstImage={indexOfFirstImage}
            indexOfLastImage={indexOfLastImage}
          />
        </>
      )}
    </>
  );
};