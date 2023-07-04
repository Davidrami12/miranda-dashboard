import styled from "styled-components";

const NotesButton = styled.button`
  transition: background-color 0.1s;
  border: none;
  background-color: #eef9f2;
  font-weight: 500;
  border: none;
  color: #212121;
  border-radius: 12px;
  margin-left: 30px;
  max-width: 160px;
  &:hover {
    background-color: #0e3f32;
  }
`;
const CreateButton = styled.div`
  background-color: #135846;
  border-radius: 8px;
  width: 213px;
  height: 50px;
  a {
    text-align: center;
    font-family: var(--font-poppins);
    text-decoration: none;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    display: block;
    padding: 15px;
  }
`;

export { NotesButton, CreateButton };