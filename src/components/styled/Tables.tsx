import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  background-color: #ffffff;
  border-radius: 20px;
  width: 100%;
`;

const HeaderTitle = styled.th`
  font-family: var(--font-poppins);
  font-size: 1.8rem;
  font-weight: 600;
  text-align: start;
  padding: 2.2rem 0 2.2rem 4rem;
  
`;

const TableActions = styled.div`
  display: flex;
  margin: 4rem 2% 3rem 2%;
  
`;

const TableFilters = styled.div`
  display: flex;
  width: 60%;
  //margin-bottom: 10px;
  
`;

const TableButtons = styled.div`
  display: flex;
  width: 40%;
  margin-left: 50px;
  justify-content: flex-end;
  gap: 20px;
  
`;

const FilterButton = styled.button`
  font-family: var(--font-poppins);
  color: #6e6e6e;
  font-weight: 500;
  padding: 12px 30px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  cursor: pointer;
  :hover {
    color: #135846;
  }
  &:focus {
    color: #135846;
    border-bottom: 2px solid #135846;
    outline: none;
  }
`;

export {
  Table,
  HeaderTitle,
  TableActions,
  TableFilters,
  FilterButton,
  TableButtons,
};

/* import React from 'react'
import { styled } from 'styled-components'

const TableStyled  = styled.table`
    width: 95%;
    margin: 0 auto;
    background-color: white;
    border-radius: 20px;
    outline: none;

    thead{
        tr{
            th{
                font: normal normal 600 16px/25px Poppins;
                padding: 1rem 0rem 1rem 0rem;
                min-width: 100px;
                text-align: start;
                padding-left: 20px;
            }
        }
    }

    tbody{
        a{
            color: black;
            text-decoration: none;
        }

        tr{
            transition: all .2s;

            &:hover{
                background-color: #ffffff;
                transition: all .2s;
                box-shadow: 0px 4px 30px #0000001A;
            }
        }

        td{
            font: normal normal normal 16px/25px Poppins;
            padding: 5px 20px;
            border-top: 1px solid #F5F5F5;
        }
    }
`;

// Componente de Tabla reutilizable
export const Table = ({data, cols, renderCell}) => {
    return (
        <TableStyled>
            <thead>
                <tr>
                    {cols.map((col, i) => (
                        <th key={i}>{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((fila, i) => (
                    <tr key={i}>
                        {cols.map((col, j) => (
                            <td key={j}>
                                {renderCell(col, fila)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </TableStyled>
    )
} */