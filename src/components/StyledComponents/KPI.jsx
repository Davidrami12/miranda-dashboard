import styled from 'styled-components';

const KPIContainer = styled.div`
  display: flex;
  //flex-wrap: wrap;
  gap: 40px;


  
`;

const KPI = styled.div`
  display: flex;
  background-color: white;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 4px 4px;
  border-radius: 12px;
  gap: 20px;
  min-width: 270px;
  transition: all 0.2s;

  &:hover{
    transform: scale(1.02);
    transition: 0.2s;
    box-shadow: 0px 16px 30px #00000014;

    div:first-child{
      transition: 0.5s;
      background-color: red;
      color: white;
    }
  }

  & .kpi-icon{
    padding: 15px;
    background-color: rgb(255, 237, 236);
    color: red;
    border-radius: 12px;
    font-size: 20px;
  }

  & .kpi-text{
    display: flex;
    flex-direction: column;
  }

`;

export {
  KPI,
  KPIContainer
};