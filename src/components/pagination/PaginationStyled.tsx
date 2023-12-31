import styled, { css } from "styled-components";

const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 2% 4rem 2%;
`;

const Text = styled.p`
  margin-left: 20px;
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  color: #393939;
  width: 100%;
`;

const Ul = styled.ul`
  list-style: none;
  display: inline-flex;
  width: 100%;
  justify-content: end;
`;

const LiNext = styled.li``;

const LiNextBtn = styled.button`
  cursor: pointer;
  display: block;
  padding: 1.5rem 3rem;
  color: #135846;
  border: 1px solid #135846;
  border-radius: 0.8rem;
  background-color: #ffffff;
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  transition: all 0.3s;

  &:hover {
    background-color: #135846;
    color: white;
  }

  svg {
    height: 2rem;
    width: 2rem;
    fill: currentColor;
  }
`;

const LiPageNumber = styled.li``;

interface LiPageBtnProps {
  $type: "currentPage" | "notCurrentPage";
}

const LiPageBtn = styled.button<LiPageBtnProps>`
  ${(props) => {
    switch (props.$type) {
      case "currentPage":
        return css`
          background-color: #135846;
          color: white;
        `;
      case "notCurrentPage":
        return css`
          background-color: transparent;
          color: #393939;
          :hover {
            background-color: #135846;
            opacity: 0.5;
            color: white;
          }
        `;
      default:
        return css``;
    }
  }}
  padding: 1.5rem 2rem;
  border: none;
  border-radius: 0.8rem;
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  transition: all 0.3s;
  
  &:hover{
    cursor: pointer;
    background-color: #135846;
    opacity: 0.7;
    color: white;
  }
`;

export { Nav, Text, Ul, LiNext, LiNextBtn, LiPageNumber, LiPageBtn };
