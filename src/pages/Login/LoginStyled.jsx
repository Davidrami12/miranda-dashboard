import styled from 'styled-components';

const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginCard = styled.div`
    background-color: white;
    display: block;
    border-radius: 8px;
    box-shadow: 0px 16px 30px #00000014;
    padding: 4rem;
`;

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const InputContainer = styled.div`
    position: relative;
`;

const Input = styled.input`
    transition: all 0.1s;
    width: 90%;
    margin: 30px 0;
    display: block;
    font-family: var(--font-poppins);
    font-size: 1.1rem;
    //border: none;
    border-bottom: 1px solid #C5C5C5;
    padding-left: 30px;

    /*&:hover{
        border-bottom: 1px solid #135846;
    }
    &:hover~div .input-icon{
        color: #135846;
    }

    &:focus{
        outline: none;
        border-bottom: 1px solid #135846;
    }

    &:focus~div .input-icon{
        color: #135846;
    }*/
`;

const Icon = styled.div`
    position: absolute;
    top: 5px;
    left: 5px;
    .input-icon{
        transition: all 0.1s;
        color: #C5C5C5;
    }
`;

const ErrorMessage = styled.span`
    color: red;
`;


export {
    LoginContainer,
    LoginCard,
    LogoContainer,
    InputContainer,
    Input,
    Icon,
    ErrorMessage
};