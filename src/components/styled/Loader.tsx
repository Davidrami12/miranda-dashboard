// Styled Components
import styled from "styled-components";

const Loader = styled.div`
  margin: 0 auto;
  border: 16px solid #dcdcdc;
  border-top: 16px solid #135846;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
  margin-top: 150px;


  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

`;

export { Loader };