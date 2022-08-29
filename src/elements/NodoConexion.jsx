import React, { useEffect, useState } from 'react';

const NodoConexion = ({nodo, nodoCxn, estadoCheck, setMatrizAdya, matrizAdya }) => {
    const [estadoCheckBox, setEstadoCheckBox] = useState(estadoCheck);
    useEffect(() => {
        cambiarMatriz();
    }, [estadoCheckBox])
    
    const cambiarMatriz = () => {
        let matriz = [];
        let fila = [];
        matriz = matriz.concat(matrizAdya);
        fila = fila.concat(matriz[nodo.id]);
        fila[nodoCxn.id] = estadoCheckBox;
        matriz[nodo.id] = fila;
        
        fila = []
        fila = fila.concat(matriz[nodoCxn.id]);
        fila[nodo.id] = estadoCheckBox;
        matriz[nodoCxn.id] = fila;
        setMatrizAdya(matriz);
    }

    return (
        <p>
            <input
                type="checkbox"
                name="cnxNdo"
                id="cnxNdo"
                checked={estadoCheckBox}
                onChange={() => setEstadoCheckBox(!estadoCheckBox)}           />
            {nodoCxn.nombre}
        </p>
    );
}

export default NodoConexion;