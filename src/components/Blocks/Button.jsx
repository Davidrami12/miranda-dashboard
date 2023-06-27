import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    ${(props) => {
        switch (props.$type) {
            case "login":
                return css`
                    transition: background-color 0.1s;
                    background-color: #135846;
                    color: #EBF1EF;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    width: 50%;
                    margin-top: 25px;
                    &:hover{
                        background-color: #0e3f32;
                    }
                `;
            case "contact":
                return css`
                background-color: #EBF1EF;
                color: #135846;
                border: none;
                border-radius: 8px;
                font-weight: 600;
                max-width: 160px;
            `;
            case "notes":
                if (props.$enabled) {
                    return css`
                    background-color: #EEF9F2;
                    font-weight: 500;
                    border: none;
                    color: #212121;
                    border-radius: 12px;
                    margin-left: 30px;
                    max-width: 160px;
                `;
                } else {
                    return css`
                    pointer-events: none;
                    background-color: #EEF9F2;
                    font-weight: 500;
                    border: 1px solid #799283;
                    color: #799283;
                    border-radius: 12px;
                    margin-left: 30px;
                    max-width: 160px;
                `;
                }
            case "create":
                return css`
                    background-color: #135846;
                    color: #FFFFFF;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    width: 213px;
                    height: 50px;
            `;

            default:
                return css`
                background-color: white;
                color: black;
            `;
        }
    }}
    padding: 13px 25px;
    text-align: center;
    font-family: var(--font-poppins);
`;

const Button = ({ type, text, enabled, click }) => {

    return (
        <StyledButton $type={type} $enabled={enabled} onClick={click}>{text}</StyledButton>
    );
}

export default Button;