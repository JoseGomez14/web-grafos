import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import NodoConexion from './NodoConexion';

const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    100% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
`;
 
const ContenedorAlerta = styled.div`
    z-index: 1000;
    background-color: #ffffff23;
    backdrop-filter: blur(5px);
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    animation: ${slideDown} 4s ease forwards;
 
    p {
        background: #272427;
        color: #fff;
        padding: 1.25rem 4.5rem;
        box-shadow: 0px 0px 15px #a8a8a818;
        border-radius: 0.4rem; /* 5px */
        text-align: center;
        font-size: 1.5rem;
    }

    section{
        background-color: #272427;
        padding: 3rem 5rem;    
        border-radius: 0.4rem; /* 5px */
    }

    h1{
        color: #fff;
        font-size: 1.5rem;
    }
`;

const VentanaEmergente = ({nodo, estadoVentana, setEstadoVentana, nodosDeConexion, matrizAdya, setMatrizAdya}) => {
    let nodosIniciales = [];

    for (let i = 0; i < matrizAdya[nodo.id].length; i++) {
        if (matrizAdya[nodo.id][i]) {
            nodosIniciales.push(i);
        }
    }

    const [nodosConectados, setNodosConectados] = useState(nodosIniciales);

    const cambiarMatriz = () => {
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
				<ContenedorAlerta>
					<section>
                        <h1>Conectar:</h1>
                        <p>{nodo.nombre}</p>
                        <h1>Con:</h1>
                        {nodosDeConexion.map(nodoCxn =>{
                            let estadoCheck = nodosConectados.some(indice => indice === nodoCxn.id);
                            return <NodoConexion
                                key={'div-nodoCnx' + nodoCxn.id}
                                nodoCxn={nodoCxn}
                                estado={estadoCheck}
                                nodosConectados={nodosConectados}
                                setNodosConectados={setNodosConectados}
                            />
                        })}
                        <button onClick={() =>{
                                setEstadoVentana(false);
                                cambiarMatriz();
                            }}>Actualizar Conexiones
                        </button>
                    </section>
				</ContenedorAlerta>
			}
		</>
	);
}
 
export default VentanaEmergente;