// React
import React, { ChangeEvent, ReactNode } from "react";

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
      {/* Another option instead of adding a SVG would be to add a custom background-image to the element to add the custom arrow */}
      <svg
        style={{ position: "absolute", top: "28%", right: "10%" }}
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        width="25"
        viewBox="0 0 48 48"
        fill="#135846"
      >
        <path d="M24 31.9 10.8 18.7l3.35-3.35 9.85 9.9 9.85-9.85 3.35 3.35Z" />
      </svg>
    </div>
  );
};

export { DropdownMenu };
