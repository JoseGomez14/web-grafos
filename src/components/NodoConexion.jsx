import React, { useEffect, useState } from 'react';
import '../elements/Checkbox.css';

const NodoConexion = ({ nodoCxn, estado, nodosConectados, setNodosConectados, index }) => {
    const [estadoCheckBox, setEstadoCheckBox] = useState(estado);
    useEffect(() => {
        actualizarNodoConectado();
    }, [estadoCheckBox])

    const actualizarNodoConectado = () => {
        let arrNodos = [];
        if (estadoCheckBox) {
            arrNodos = arrNodos.concat(nodosConectados);
            arrNodos.push(nodoCxn.id);
        } else {
            for (let i = 0; i < nodosConectados.length; i++) {
                if (nodosConectados[i] !== nodoCxn.id) {
                    arrNodos.push(nodosConectados[i]);
                }
            }
        }
        setNodosConectados(arrNodos);
    }

    return (
        <div className='toggler'>
            <b>{nodoCxn.nombre}</b>

            <input id={'toggler-' + index} name={'toggler-' + index} type="checkbox" value="1"
                checked={estadoCheckBox}
                onChange={() => setEstadoCheckBox(!estadoCheckBox)}
            />

            <label htmlFor={'toggler-' + index}>
                <svg className="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2"><polyline className="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline></svg>
                <svg className="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2"><line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line><line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line></svg>
            </label>
        </div>
    );
}

export default NodoConexion;