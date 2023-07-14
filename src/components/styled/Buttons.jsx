import React from 'react';
import styled, { css } from 'styled-components';

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

const StyledButton = styled.button`
    ${(props) => {
        switch (props.$type) {
            case "login":
                return css`
                    display: block;
                    margin: 0 auto;
                    transition: background-color 0.1s;
                    background-color: #135846;
                    color: #EBF1EF;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    padding: 2rem;
                    margin-top: 2rem;
                    &:hover{
                        background-color: #0e3f32;
                        cursor: pointer;
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
        <StyledButton $type={type} $enabled={enabled} data-cy="submit" onClick={click}>{text}</StyledButton>
    );
}

export { NotesButton, CreateButton };
export default Button;