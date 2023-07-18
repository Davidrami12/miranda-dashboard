import React from 'react';
import styled, { css } from 'styled-components';

interface SelectStyledProps {
    $type: string;
}

const SelectStyled = styled.select<SelectStyledProps>`
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
                    border: 1px solid #135846;
                    color: #135846;
                    width: 129px;
                `;
            default:
                return css``;
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

interface SelectProps {
    type: string;
    options: string[];
}

const Select: React.FC<SelectProps> = ({ type, options }) => {
    return (
        <SelectStyled $type={type}>
            {options.map((option, index) => {
                return (<option key={index}>{option}</option>)
            })}
        </SelectStyled>
    );
}

export default Select;
