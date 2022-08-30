import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import NodoConexion from './NodoConexion';
import Boton from '../elements/Boton';

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
 
    p, article {
        background: #272427;
        color: #fff;
        padding: 1.25rem 4.5rem;
        box-shadow: 0px 0px 15px #a8a8a818;
        border-radius: 0.4rem;
        text-align: center;
        font-size: 1.5rem;
        cursor: pointer;
    }

    article{
        margin-bottom: 1.5rem;
    }

    section{
        background-color: #272427;
        padding: 3rem 5rem;    
        border-radius: 0.4rem;
        max-height: 90vh;
        overflow-y: auto;

        &::-webkit-scrollbar
        {
            border-radius: 15px;
            background-color: rgba(255, 255, 255, 0);
            width: 8px;
        }

        &::-webkit-scrollbar-thumb
        {
            background-color: #D4D4D4;
            border-radius: 8px;
        }
    }

    h1{
        color: #fff;
        font-size: 1.5rem;
        font-weight: 400;
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
                        <p><b>{nodo.nombre}</b></p>
                        <h1>Con:</h1>
                        {nodosDeConexion.map((nodoCxn, index) =>{
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
                        <Boton 
                            onClick={() =>{
                            cambiarMatriz();
                            setEstadoVentana(false);
                            console.log();
                        }}
                        marginTop
                        >Actualizar Conexiones</Boton>
                    </section>
				</ContenedorAlerta>
			}
		</>
	);
}
 
export default VentanaEmergente;