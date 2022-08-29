import React, { useEffect, useState } from 'react';

const NodoConexion = ({nodoCxn, estado, nodosConectados, setNodosConectados}) => {
    const [estadoCheckBox, setEstadoCheckBox] = useState(estado);
    useEffect(() => {
        actualizarNodoConectado();
    }, [estadoCheckBox])
    
    const actualizarNodoConectado = ()=>{
        let arrNodos = [];
        if(estadoCheckBox){
            arrNodos = arrNodos.concat(nodosConectados);
            arrNodos.push(nodoCxn.id);
        }else{
            for (let i = 0; i < nodosConectados.length; i++) {
                if(nodosConectados[i] !== nodoCxn.id){
                    arrNodos.push(nodosConectados[i]);
                }
            }
        }
        setNodosConectados(arrNodos);
    }

    return (
        <p>
            <input
                type="checkbox"
                name="cnxNdo"
                id="cnxNdo"
                checked={estadoCheckBox}
                onChange={() =>setEstadoCheckBox(!estadoCheckBox)}           
            />
            {nodoCxn.nombre}
        </p>
    );
}

export default NodoConexion;