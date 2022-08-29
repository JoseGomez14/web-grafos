import React from 'react'
import styled from 'styled-components';

const ContenedorTabla = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    table{
        border-collapse: collapse;
    }

    td, th{
        border: 1px solid gray;
        font-size: 1.5rem;
        p{
            margin: 16px 24px;
        }
    }
    
    tr:nth-child(even){
        background: #F3F3F3;
    }
`;

const Matrices = ({matriz, letraTitulo, titulo,  numAristas}) => {
    return ( 
        <div>
            {matriz.length > 0?
            <section>
            <h1>{titulo}</h1>
            <ContenedorTabla>
                <table>
                    <tbody>
                    <tr id='row-table-title'>
                        <th scope="row"></th>
                        {matriz.map((columna, indexCol) => {
                            return <th key={'col-table-title'+ indexCol}>
                                <p>{letraTitulo + (indexCol + 1)}</p>
                                </th>
                            })
                        }
                    </tr>
                    {
                        matriz.map((fila, indexFila) => {
                            return <tr key={'row-table'+ indexFila}>
                                <th>
                                    <p>N{indexFila + 1}</p>
                                </th>
                                {fila.map((columna, indexCol) => {                      
                                    return <td key={'col-table' + indexCol}>
                                        <p>{columna? "1": "0"}</p>
                                    </td>
                                })}
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </ContenedorTabla>
        </section>
        :
        <section>
            <p>Aún no hay datos en el grafo</p>
        </section>}
        <br></br>
        </div>
     );
}

export default Matrices;