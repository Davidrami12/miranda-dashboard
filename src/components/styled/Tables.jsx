import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  background-color: #ffffff;
  border-radius: 20px;
  width: 100%;
`;

const HeaderTitle = styled.th`
  font-family: var(--font-poppins);
  font-size: 1.8rem;
  font-weight: 600;
  text-align: start;
  padding: 2.2rem 0 2.2rem 4rem;
`;

const TableActions = styled.div`
  display: flex;
  margin: 4rem 2% 3rem 2%;
`;

const TableFilters = styled.div`
  display: flex;
  width: 60%;
  margin-bottom: 50px;
`;

const TableButtons = styled.div`
  display: flex;
  width: 40%;
  margin-left: 50px;
  justify-content: flex-end;
  gap: 20px;
`;

const FilterButton = styled.button`
  font-family: var(--font-poppins);
  color: #6e6e6e;
  font-weight: 500;
  padding: 12px 30px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  cursor: pointer;
  :hover {
    color: #135846;
  }
  &:focus {
    color: #135846;
    border-bottom: 2px solid #135846;
    outline: none;
  }
`;

export {
  Table,
  HeaderTitle,
  TableActions,
  TableFilters,
  FilterButton,
  TableButtons,
};