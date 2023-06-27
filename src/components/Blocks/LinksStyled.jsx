import styled from "styled-components";

const LinkButton = styled.div`
    background-color: #EBF1EF;
    border: none;
    border-radius: 8px;
    width: 160px;
    height: 50px;
    a{
        text-align: center;
        font-family: var(--font-poppins);
        text-decoration: none;
        color: #135846;
        font-size: 14px;
        font-weight: 600;
        display: block;
        padding: 15px;
    }
`;

const ButtonNew = styled.div`
    background-color: #135846;
    border-radius: 8px;
    width: 213px;
    height: 50px;
    a{
        text-align: center;
        font-family: var(--font-poppins);
        text-decoration: none;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 600;
        display: block;
        padding: 15px;
    }
`;

export { ButtonNew };