// React
import React from "react";

// Styled Components
import {
  Nav,
  Text,
  Ul,
  LiNext,
  LiNextBtn,
  LiPageNumber,
  LiPageBtn,
} from "./PaginationStyled";

const Pagination = ({
  // props for handling pagination
  nPages,
  currentPage,
  setCurrentPage,
  dataDisplayed,
  total,
  indexOfLastImage,
  indexOfFirstImage,
}) => {

  // Creating an array of page numbers from 1 to total number of pages
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  // next / previous page if user is not at the last page or first page respectively
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Nav aria-label="Page navigation example relative ">
      {/* Shows the current elements that are being displayed */}
      <Text>
        Showing {dataDisplayed} {indexOfFirstImage} to{" "}
        {indexOfLastImage > total ? total : indexOfLastImage} from a
        total of {total} {dataDisplayed}
      </Text>
      <Ul>
        <LiNext>
          <LiNextBtn onClick={prevPage} style={{ marginRight: 20 }}>
            <span>Prev</span>
          </LiNextBtn>
        </LiNext>


        {/* Creating a button for each page number */}
        {pageNumbers.map((pgNumber) => (
          <LiPageNumber key={pgNumber}>
            <LiPageBtn
              $type={
                currentPage === pgNumber ? "currentPage" : "notCurrentPage"
              }
              onClick={() => setCurrentPage(pgNumber)}
            >
              {pgNumber}
            </LiPageBtn>
          </LiPageNumber>
        ))}


        <LiNext>
          <LiNextBtn onClick={nextPage} style={{ marginLeft: 20 }}>
            <span>Next</span>
          </LiNextBtn>
        </LiNext>
      </Ul>
    </Nav>
  );
};

export { Pagination };