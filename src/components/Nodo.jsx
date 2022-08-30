import React, {useState, useEffect} from 'react'
import VentanaEmergente from './VentanaEmergente'
import styled from 'styled-components';
import BotonPeq from '../elements/BotonPeq';

const Nodo = ({nodo, nodosDeConexion, matrizAdya, setMatrizAdya}) => {    
    const [estadoVentana, setEstadoVentana] = useState(true);
    const [ventanaNodos, setVentanaNodos] = useState();

    useEffect(() => {
        return () => {
            setVentanaNodos();
            setEstadoVentana(true);
        }
      }, [estadoVentana, setEstadoVentana]);
    
    const lanzarLista = ()=>{
        setEstadoVentana(true);
        let ventana = <VentanaEmergente
            nodo={nodo}
            estadoVentana={estadoVentana}
            setEstadoVentana={setEstadoVentana}
            nodosDeConexion={nodosDeConexion}
            matrizAdya={matrizAdya}
            setMatrizAdya={setMatrizAdya}
        />
     setVentanaNodos(ventana);
    }
    return ( 
        <ContendorNodo>
            <div>
                {ventanaNodos}
            </div>
            <div>
            <h1>Nodo: {nodo.nombre}</h1>
                {
                    matrizAdya[nodo.id].filter(cxn => cxn === true).length > 0?<h3>Conexiones:</h3>:<></>
                }
                {   
                    matrizAdya[nodo.id].map((nodoSelected, index) =>{
                        if(nodoSelected){
                            return <p key={'msjCnx-n' + (index + 1)}>
                                {nodo.nombre + ' ——— N' + (index + 1)}
                            </p>
                        }else{return null}
                    })
                }
                {matrizAdya.length > 1?
                    <BotonPeq onClick={lanzarLista} primario>Agregar Conexión</BotonPeq>
                :null}
            </div>
        </ContendorNodo>
     );
}

const ContendorNodo = styled.div`
    flex: 1 1 300px;
    border-radius: 10px;
    background-color: #efefef;
    width: fit-content;
    padding: 1rem 2rem;
    height: 100%;
    margin: 0;
    
    p{
        font-size: 1.2rem;
    }
`;

export default Nodo;