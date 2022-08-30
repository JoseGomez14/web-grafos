import React, { useState, useEffect } from 'react'
import VentanaEmergente from './VentanaEmergente'
import { ContendorNodo } from '../elements/Pprincipal';
import BotonPeq from '../elements/BotonPeq';

const Nodo = ({ nodo, matrizAdya, setMatrizAdya }) => {
    const [estadoVentana, setEstadoVentana] = useState(true);
    const [ventanaNodos, setVentanaNodos] = useState();

    useEffect(() => {
        return () => {
            setVentanaNodos();
            setEstadoVentana(true);
        }
    }, [estadoVentana, setEstadoVentana]);

    const lanzarLista = () => {
        setEstadoVentana(true);
        let ventana = <VentanaEmergente
            nodo={nodo}
            estadoVentana={estadoVentana}
            setEstadoVentana={setEstadoVentana}
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
                {matrizAdya[nodo.id].filter(element => element === true).length > 0 ? <h3>Conexiones:</h3> : <></>}

                {
                    matrizAdya[nodo.id].map((nodoSelected, index) => {
                        if (nodoSelected) {
                            return <p key={'msjCnx-n' + (index + 1)}>
                                {nodo.nombre + ' ——— N' + (index + 1)}
                            </p>
                        } else { return null }
                    })
                }

                {matrizAdya.length > 1 ?
                    <BotonPeq onClick={lanzarLista} primario>Agregar Conexión</BotonPeq>
                    : null}
            </div>
        </ContendorNodo>
    );
}

export default Nodo;