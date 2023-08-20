// React
import React, { ChangeEvent, ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";

// Styled Components
import styled, { css } from "styled-components";

const DropdownMenuStyled = styled.select<{ filter: any }>`
  ${(props) => {
    switch (props.filter) {
      case "green":
        return css`
          background-color: #135846;
          color: #ffffff;
        `;
      case "white":
        return css`
          background-color: white;
          border: 1px solid #135846;
          color: #135846;
          width: fit-content;
        `;
      default:
        return css``;
    }
  }};

  border-radius: 8px;
  font-weight: 500;
  font-family: var(--font-poppins);
  padding: 1rem 4rem 1rem 2rem;
  height: 50px;
  cursor: pointer;
  appearance: none;
  
  &:focus {
    outline: none;
  }

  option {
    //color: red;
  }
`;

const DropdownMenu = ({
  type,
  options,
  setActiveFilter,
  handleInput,
  selected,
}: any) => {
  return (
    <div style={{ position: "relative" }}>
      <DropdownMenuStyled
        defaultValue={selected ? selected : "Manager"}
        filter={type}
        name="position"
        onChange={(e) => {
          if (
            e.target.value !== "Manager" &&
            e.target.value !== "Reception" &&
            e.target.value !== "Room Service"
          ) {
            setActiveFilter(e.target.value);
          } else {
            handleInput(e);
          }
        }}
      >
        {options.map((option: string[], index: number) => {
          return <option key={index}>{option}</option>;
        })}
      </DropdownMenuStyled>
      
      <IoIosArrowDown 
        style={{ position: "absolute", top: "33%", right: "12%", color: "#135846", fontSize: '20px', pointerEvents: 'none' }}
      />

    </div>
  );
};

export { DropdownMenu };
