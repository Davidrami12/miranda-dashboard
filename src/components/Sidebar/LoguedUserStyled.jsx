import styled from 'styled-components';

const Card = styled.div`
    width: 100%;
    max-width: 200px;
    height: 200px;
    padding: 20px;
    border-radius: 18px;
    box-shadow: 0px 6px 6px #00000014;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 70px;
        height: 70px;
        object-fit: cover;
        display: block;
        margin: auto;
        border-radius: 8px;
    }
`;

const UserName = styled.p`
    color: #393939;
    font-family: var(--font-poppins);
    text-align: center;
    font-weight: 500;
`;

const UserEmail = styled.p`
    color: #B2B2B2;
    font-family: var(--font-poppins);
    font-size: 12px;
    text-align: center;
`;

export {
    Card,
    UserName,
    UserEmail
};