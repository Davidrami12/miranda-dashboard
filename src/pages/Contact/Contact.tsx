// React
import React, { useState, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getDataReviews } from "../../features/contactSlice";

// Styled Components
import { Reviews } from "../../components/dashboard/DashboardStyled";
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

// TypeScript
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ContactInterface } from "../../interfaces/ContactInterface";

type ReviewsType = {
  reviewsList: ContactInterface[];
};
type StatusType = {
  status: string;
};

export const Contact = () => {

  const dispatch = useAppDispatch();
  const { reviewsList } = useAppSelector<ReviewsType>(
    (state) => state.contactReducer
  );
  const { status } = useAppSelector<StatusType>(
    (state) => state.contactReducer
  );


  const [reviews, setReviews] = useState<ContactInterface[]>(reviewsList);
  const [activeFilter, setActiveFilter] = useState<string>("Date");
  const [currentReviews, setCurrentReviews] = useState<ContactInterface[]>([]);

  useEffect(() => {
    if (reviewsList.length === 0) {
      dispatch(getDataReviews());
    }
    setReviews(reviewsList);
  }, [reviewsList, dispatch]);

  const getAllReviews = (): void => {
    setReviews(reviewsList);
  };

  const filterByType = (type: boolean): void => {
    setReviews(reviewsList.filter((review) => review.archived === type));
  };

  useEffect(() => {
    const orderedReviews = [...reviewsList];
    switch (activeFilter) {
      case "Date":
        orderedReviews.sort((a: ContactInterface, b: ContactInterface) => {
          let dateA: Date = new Date(a.date);
          let dateB: Date = new Date(b.date);
          return dateA.getTime() - dateB.getTime();
        });
        break;
      case "Name":
        orderedReviews.sort((a: ContactInterface, b: ContactInterface) => {
          const nameA: string = a.user.name.toUpperCase();
          const nameB: string = b.user.name.toUpperCase();
          return nameA.localeCompare(nameB);
        });
        break;
      default:
        break;
    }
    setReviews(orderedReviews);
  }, [activeFilter, reviewsList]);

  // Variables for the pagination component
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [roomsPerPage] = useState<number>(10);
  const indexOfLastImage: number = currentPage * roomsPerPage;
  const indexOfFirstImage: number = indexOfLastImage - roomsPerPage;

  useEffect(() => {
    setCurrentReviews(reviews.slice(indexOfFirstImage, indexOfLastImage));
  }, [reviews, indexOfFirstImage, indexOfLastImage]);

  const nPages: number = Math.ceil(reviews.length / roomsPerPage);


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
              <FilterButton onClick={getAllReviews}>
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
                options={["Date", "Name"]}
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
                  currentReviews.map((review: ContactInterface) => (
                    <ReviewRow key={review.id} review={review} />
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