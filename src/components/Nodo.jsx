import React, {useState, useEffect} from 'react'
import VentanaEmergente from './VentanaEmergente'

const Nodo = ({nodo, nodosDeConexion, matrizAdya, setMatrizAdya}) => {    
    const [estadoVentana, setEstadoVentana] = useState(false);
    const [ventanaNodos, setVentanaNodos] = useState();

    useEffect(() => {
        return () => {
            setVentanaNodos();
            setEstadoVentana(true);
        }
      }, [estadoVentana, setEstadoVentana]);
    
    const lanzarLista = ()=>{
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
        <div>
            <h1>Nodo: {nodo.nombre}</h1>
            {
                matrizAdya[nodo.id].filter(cxn => cxn === true).length > 0?<h3>Conexiones:</h3>:<></>
            }
            {   
                matrizAdya[nodo.id].map((nodoSelected, index) =>{
                    if(nodoSelected){
                        return <p key={'msjCnx-n' + (index + 1)}>
                            {nodo.nombre + ' ---- N' + (index + 1)}
                        </p>
                    }else{return null}
                })
            }
            {matrizAdya.length > 1?
            <button onClick={lanzarLista}>Agregar Conexión</button>
            :null}
            <div>
                {ventanaNodos}
            </div>
        </div>
     );
}
 
export default Nodo;