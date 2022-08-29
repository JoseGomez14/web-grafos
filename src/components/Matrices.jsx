import React from 'react'
import styled from 'styled-components';

const ContenedorTabla = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    table{
        border-collapse: collapse;
    }

    td{
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

const Matrices = ({matrizAdya}) => {
    return ( 
        <div>
            {matrizAdya.length > 0?
            <section>
            <h1>Matriz de Adyacencia</h1>
            <ContenedorTabla>
                <table>
                    <tbody>
                    {
                        matrizAdya.map((fila, index) => {
                            return <tr key={'row-adya'+ index}>
                                {fila.map((columna, index) => {
                                return  <td key={'col-adya'+ index}>
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
            <p>Aún no hay datos para el grafo</p>
        </section>}
        <br></br>
        </div>
     );
}
 
export default Matrices;