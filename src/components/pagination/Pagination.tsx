import React from 'react';
import {
  Nav,
  Text,
  Ul,
  LiNext,
  LiNextBtn,
  LiPageNumber,
  LiPageBtn,
} from "./PaginationStyled";

interface PaginationProps {
  nPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  dataDisplayed: string;
  total: number;
  indexOfLastImage: number;
  indexOfFirstImage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  nPages,
  currentPage,
  setCurrentPage,
  dataDisplayed,
  total,
  indexOfLastImage,
  indexOfFirstImage,
}) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Nav aria-label="Page navigation example relative ">
      <Text>
        Showing {dataDisplayed} {indexOfFirstImage} to{" "}
        {indexOfLastImage > total ? total : indexOfLastImage} from a
        total of<strong> {total} {dataDisplayed}</strong>
      </Text>
      <Ul>
        <LiNext>
          <LiNextBtn onClick={prevPage} style={{ marginRight: 20 }}>
            <span>Prev</span>
          </LiNextBtn>
        </LiNext>

        {pageNumbers.map((pgNumber) => (
          <LiPageNumber key={pgNumber}>
            <LiPageBtn
              $type={currentPage === pgNumber ? "currentPage" : "notCurrentPage"}
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
