import React from 'react';
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
        text-align: center;
        font-size: 1.5rem;
    }

    section{
        background-color: #272427;
        padding: 3rem 3rem;    
        border-radius: 0.31rem; /* 5px */
    }

    h1{
        color: #fff;
        font-size: 1.5rem;
    }
`;

const VentanaEmergente = ({nodo, estadoVentana, setEstadoVentana, nodosDeConexion, matrizAdya, setMatrizAdya}) => {
    return (
		<>
			{estadoVentana &&
				<ContenedorAlerta>
					<section>
                        <h1>Conectar:</h1>
                        <p>{nodo.nombre}</p>
                        <h1>Con:</h1>
                        {nodosDeConexion.map(nodoCxn =>{
                            let matrizCheck = [];
                            matrizCheck = matrizCheck.concat(matrizAdya);
                            let filaCheck = [];
                            filaCheck = filaCheck.concat(matrizCheck[nodo.id]);
                            return <NodoConexion 
                                key={'div-nodoCnx' + nodoCxn.id}
                                estadoCheck={filaCheck[nodoCxn.id]}
                                matrizAdya={matrizAdya}
                                setMatrizAdya={setMatrizAdya}
                                nodo={nodo}
                                nodoCxn={nodoCxn}
                            />
                        })}
                        <button onClick={() =>{
                                setEstadoVentana(false);
                            }}>Actualizar Conexiones
                        </button>
                    </section>
				</ContenedorAlerta>
			}
		</>
	);
}
 
export default VentanaEmergente;