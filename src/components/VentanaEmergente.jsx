import React, { useState } from 'react';
import { ContenedorVentana } from '../elements/Ventana';
import NodoConexion from './NodoConexion';
import Boton from '../elements/Boton';

const VentanaEmergente = ({ nodo, estadoVentana, setEstadoVentana, matrizAdya, setMatrizAdya }) => {
    let nodosIniciales = [];
    for (let i = 0; i < matrizAdya[nodo.id].length; i++) {
        if (matrizAdya[nodo.id][i]) {
            nodosIniciales.push(i);
        }
    }

    const [nodosConectados, setNodosConectados] = useState(nodosIniciales);

    const actualizarMatriz = () => {
        let matriz = [];
        let fila = [];
        let nodosRef = [];
        nodosRef = nodosRef.concat(nodosConectados);
        matriz = matriz.concat(matrizAdya);
        for (let i = 0; i < matrizAdya.length; i++) {
            let estadoNodo = nodosRef.some(indice => indice === i);
            fila = [];
            fila = fila.concat(matriz[nodo.id]);
            fila[i] = estadoNodo;
            matriz[nodo.id] = fila;

            fila = []
            fila = fila.concat(matriz[i]);
            fila[nodo.id] = estadoNodo;
            matriz[i] = fila;
        }
        setMatrizAdya(matriz);
    }

    return (
        <>
            {estadoVentana &&
                <ContenedorVentana>
                    <section>
                        <h1>Conectar:</h1>
                        <p><b>{nodo.nombre}</b></p>
                        <h1>Con:</h1>
                        {nodo.nodos.map((nodoCxn, index) => {
                            let estadoCheck = nodosConectados.some(indice => indice === nodoCxn.id);
                            return <article key={'div-nodoCnx' + nodoCxn.id}>
                                <NodoConexion
                                    nodoCxn={nodoCxn}
                                    estado={estadoCheck}
                                    nodosConectados={nodosConectados}
                                    setNodosConectados={setNodosConectados}
                                    index={index}
                                />
                            </article>
                        })}
                        
                        <Boton marginTop onClick={() => {
                                actualizarMatriz();
                                setEstadoVentana(false);
                            }}
                        >Actualizar Conexiones</Boton>
                    </section>
                </ContenedorVentana>
            }
        </>
    );
}

export default VentanaEmergente;