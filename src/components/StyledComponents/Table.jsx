import React from 'react'
import { styled } from 'styled-components'

const TableContainer = styled.table`
    width: 90%;
    margin: 0 auto;
    background-color: white;
    border-radius: 20px;
    outline: none;

    thead{
        background-color: lightblue;
        text-align: left;
        min-width: 200px;

        tr{
            font: normal normal 600 18px/27px Poppins;
            color: #393939;
        }
    }

    tbody{
        background-color: lightcyan;
        text-align: center;
        min-width: 200px;
        tr{


            td{

            }
        }
    }
`;

// Componente de Tabla reutilizable
export const Table = ({data, cols}) => {
    return (
        <TableContainer>
            <thead>
                <tr>
                    {cols.map((columna, index) => (
                        <th key={index}>{columna}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((fila, index) => (
                    <tr key={index}>
                        {cols.map((columna, index) => (
                            <td key={index} style={ columna === 'status' ? 
                                                    (fila[columna] === 'active' ? {color: 'green'} : {color: 'red'}) 
                                                    : {} }>
                                {fila[columna]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </TableContainer>
    )
}