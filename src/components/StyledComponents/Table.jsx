import React from 'react'
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
export const Table = ({data, cols}) => {
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
                        {cols.map((col, i) => (
                            <td key={i} 
                                style={ col === 'status' ? 
                                        (fila[col] === 'active' ? {color: 'green', textTransform: 'uppercase'} : {color: 'red', textTransform: 'uppercase'}) 
                                        : {} }>
                                {fila[col]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </TableStyled>
    )
}