import React from 'react';
import styled, { css } from 'styled-components';

const SelectStyled = styled.select`
    ${(props) => {
        switch (props.$type) {
            case "green":
                return css`
                    background-color: #135846;
                    color: #FFFFFF;
                `;
            case "white":
                return css`
                    background-color: white;
                    border-radius: 1px solid #135846;
                    color: #135846;
                    width: 129px;
                `;
            default:
                return css`

            `;
        }
    }};
    border-radius: 8px;
    font-weight: 500;
    font-family: var(--font-poppins);
    padding: 13px 25px;
    height: 50px;
    &:focus{
        outline: none;
    }
`;

const Select = ({ type, options }) => {
    return (
        <SelectStyled $type={type}>
            {options.map((option, index) => {
                return (<option key={index}>{option}</option>)
            })}
        </SelectStyled>
    );
}

export default Select;