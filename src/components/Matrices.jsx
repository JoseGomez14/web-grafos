import React from 'react'
import {ContenedorTabla, Tabla} from '../elements/Tablas'

const Matrices = ({ matriz, letraTitulo, titulo, numAristas }) => {
    return (
        <div>
            <ContenedorTabla>
                <h1>{titulo}</h1>
                <Tabla>
                    <thead>
                        <tr id='row-table-title'>
                            <th></th>
                            {matriz[0].map((columna, indexCol) => {
                                return <th key={'col-table-title' + indexCol}>{letraTitulo + (indexCol + 1)}</th>
                            })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            matriz.map((fila, indexFila) => {
                                return <tr key={'row-table' + indexFila}>
                                    <th>N{indexFila + 1}</th>
                                    {fila.map((columna, indexCol) => {
                                        return <td key={'col-table' + indexCol}>{columna ? "1" : "0"}</td>
                                    })}
                                </tr>
                            })
                        }
                    </tbody>
                </Tabla>
            </ContenedorTabla>
            <br></br>
        </div>
    );
}

export default Matrices;