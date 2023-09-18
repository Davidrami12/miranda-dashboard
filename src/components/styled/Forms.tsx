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
  border-radius: 10px;
  box-shadow: 0px 16px 30px #00000014;
  padding: 4rem;
  width: 600px;
  font-size: 1.7rem;
  text-align: justify;
  border-radius: 20px;
  box-shadow: 5px 10px 8px 10px rgba(0, 0, 0, 0.368627451);
  outline: 2px solid #135846;
  outline-offset: -12px;

  hr{
    border: 2px solid #135846;
    border-radius: 10px;
  }
  
  & p{
    padding: 1.5rem 0rem 0rem 0rem;
  }
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
  width: 100%;
  margin: 3rem 0rem 2rem 0rem;
  display: block;
  font-family: var(--font-poppins);
  font-size: 1.5rem;
  border: none;
  border-bottom: 1px solid #C5C5C5;
  padding-left: 30px;

  &:hover{
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
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 0px;
  left: 5px;
  .input-icon{
    transition: all 0.2s;
    color: #C5C5C5;
  }
`;

const ErrorMessage = styled.span`
  color: red;
`;

const DashboardForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  padding-bottom: 3rem;
`;

const InputForm = styled.input`
  transition: all 0.1s;
  width: 100%;
  margin: 1rem 0rem 2rem 0rem;
  display: block;
  font-family: var(--font-poppins);
  font-size: 1.5rem;
  border: none;
  border-bottom: 1px solid #C5C5C5;

  &:hover{
    border-bottom: 1px solid #135846;
  }
  &:hover~div .input-icon{
    color: #135846;
  }

  &:focus{
    outline: none;
    border-bottom: 1.5px solid #135846;
  }

  &:focus~div .input-icon{
    color: #135846;
  }
`;

const Description = styled.p`
  text-align: center;
  font-family: var(--font-poppins);
  font-size: 1.4rem;
`;

const FormTitle = styled.p`
  text-align: center;
  font-family: var(--font-poppins);
  font-size: 3.5rem;
  font-weight: 500;
  color: #135846;
  margin-bottom: 0rem;
  margin-bottom: 2rem;
`;

const LoginButton = styled.div`
  cursor: pointer;
  background-color: #ebf1ef;
  border: none;
  border-radius: 12px;
  width: 16rem;
  transition: background-color 0.3s;
  text-align: center;
  font-family: var(--font-poppins);
  text-decoration: none;
  color: #135846;
  font-size: 1.4rem;
  font-weight: 600;
  display: block;
  padding: 1.5rem;
  margin: auto;
  &:hover {
    background-color: rgba(19, 87, 69, 0.2);
  }
`;
const InputSubmit = styled.input`
  display: inline-block;
  background-color: #3fad8144;
  border: none;
  border-radius: 10px;
  width: 16rem;
  transition: background-color 0.3s;
  text-align: center;
  font-family: var(--font-poppins);
  text-decoration: none;
  color: #135846;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1.2rem;
  margin: auto;
  &:hover {
    cursor: pointer;
    background-color: rgba(18, 151, 115, 0.461);
  }
`;
const InputCancel = styled.button`
  display: inline-block;
  background-color: rgba(226, 52, 40, 0.1);
  border: none;
  border-radius: 10px;
  width: 16rem;
  transition: background-color 0.3s;
  text-align: center;
  font-family: var(--font-poppins);
  text-decoration: none;
  color: rgba(226, 52, 40, 1);
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1.2rem;
  margin: auto;
  &:hover {
    cursor: pointer;
    background-color: rgba(226, 52, 40, 0.369);
  }
`;

const RadioInput = styled.input`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  color: #777777;
  margin-right: 1rem;
  margin-bottom: 2rem;
`;

const RadioLabel = styled.label`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  color: #777777;
  margin-right: 4rem;
`;

const InputDescription = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  color: #393939;
  margin-top: 0;
  text-decoration: underline;
  font-weight: bolder;
`;







export {
  LoginContainer,
  LoginCard,
  LogoContainer,
  InputContainer,
  Input,
  Icon,
  ErrorMessage,
  
  
  
  
  
  LoginButton,
  DashboardForm,
  InputForm,
  Description,
  RadioInput,
  RadioLabel,
  InputDescription,
  InputSubmit,
  FormTitle,
  InputCancel,
};