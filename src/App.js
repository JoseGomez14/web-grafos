import React, { useState } from 'react';
import './App.css';
import Matrices from './components/Matrices';
import Nodo from './components/Nodo';
import Boton from './elements/Boton';
import Contenedor from './elements/Contenedor';
import Input from './elements/Input';
import styled from 'styled-components';

function App() {
  const [numNodos, setNumNodos] = useState();
  const [nodos, setNodos] = useState([]);
  const [matrizAdya, setMatrizAdya] = useState([]);
  const [resultadosAnalisis, setResultadosAnalisis] = useState();

  const actualizarNodos = (e) => {
    e.preventDefault();
    let arrNodos = [];

    // Crea el arreglo de nodos
    for (let i = 1; i <= numNodos; i++) {
      arrNodos.push({
        nombre: "N" + i,
        id: i - 1
      });
    }

    //Crea los nodos de conexión
    for (let i = 0; i < arrNodos.length; i++) {
      let nodosDeConexion = [];
      for (let j = 0; j < arrNodos.length; j++) {
        if (j !== i) {
          nodosDeConexion.push(arrNodos[j]);
        }
      }
      arrNodos[i] = { ...arrNodos[i], nodos: nodosDeConexion };
    }

    setNodos(arrNodos);

    let matrizAux = [];
    let matrizAuxColumnas = [];

    //Crea la matriz de adyacencia
    for (let i = 0; i < numNodos; i++) {
      matrizAuxColumnas.push(false);
    }
    for (let i = 0; i < numNodos; i++) {
      matrizAux.push(matrizAuxColumnas);
    }
    setMatrizAdya(matrizAux);
  }

  const cambiarNumNodos = (e) => {
    setNumNodos(e.target.value);
  }

  const mostrarConclusiones = () => {
    let conclusiones;
    let matrizInci = matrizIncidencia(matrizAdya);
    let numAristas = 0;
    if(matrizInci != null){
      numAristas = matrizInci[0].length;
    }
    if(matrizAdya.length > 0){
      conclusiones = <>
        <Matrices
          matriz={matrizAdya}
          titulo={'Matriz de Adyacencia'}
          letraTitulo={'N'}
        />
        {matrizInci !== null?
          <Matrices
            matriz={matrizInci}
            titulo={'Matriz de Incidencia'}
            letraTitulo={'L'}
          />:<Parrafo rojo>El grafo no tiene aristas, por lo tanto, no se construye <b>la matriz de incidencia.</b></Parrafo>
        }
        <Parrafo><b>Número de aristas: {numAristas}</b></Parrafo>
        <br/>
      </>
    }else{
      conclusiones = <>
        <Parrafo rojo>Aún no hay datos en el grafo.</Parrafo>
      </>
    }
    
    setResultadosAnalisis(conclusiones);
  }

  const matrizIncidencia = (matriz)=>{
    let colRef = [];
    let estadoIncidencia = false;
    for(let i = 0; i < matriz.length; i++){colRef.push(false)}  

    let matrizInci = [];
    for(let col = 1; col < matriz.length; col++){
      for(let row = 0; row < col; row++){
        let colRefAux = colRef.slice();
        if(matriz[row][col]){
          colRefAux[row] = true;
          colRefAux[col] = true;
          matrizInci.push(colRefAux);
          estadoIncidencia = true;
        }
      }
    }

    if(estadoIncidencia){return transponerMatriz(matrizInci)}
    else{return null}
  }
  
  const transponerMatriz = (matriz)=>{
    let matrizTransp = [];
  
    for(let x  = 0; x < matriz[0].length; x++){
      let filaAux = [];
      for(let y = 0; y < matriz.length; y++){
        filaAux.push(matriz[y][x]);
      }
      matrizTransp.push(filaAux);
    }
    return matrizTransp
  }


  return (
    <Contenedor className="App">
      <article>
        <h1>Representación y Análisis de Grafos No Dirigidos</h1>
        <br /><hr />
        <Parrafo><b>Paso 1:</b> Defina el número de nodos del grafo a representar.</Parrafo>
        <form onSubmit={actualizarNodos}>
          <Input
            id='inp-numNodos'
            type='number'
            placeholder='Número de nodos'
            min={1}
            onChange={cambiarNumNodos}
          />
          <br />
          <Boton type='submit'>Construir Nodos</Boton>
        </form>
        <hr />
      </article>
      <article>
        <Parrafo><b>Paso 2:</b> Defina las conexiones entre los nodos.</Parrafo>
        <ContendorNodos>
          {nodos.map((nodo) => {
            return <Nodo
              key={nodo.id}
              nodo={nodo}
              nodosDeConexion={nodo.nodos}
              matrizAdya={matrizAdya}
              setMatrizAdya={setMatrizAdya}
            />
          })}
        </ContendorNodos>
        <hr />
        <section>
          <Parrafo><b>Paso 3:</b> Cuando su grafo esté listo oprima el botón de <b>Obtener Resultados</b> para ver las conclusiones del grafo introducido.</Parrafo>
          {resultadosAnalisis}
          <Boton onClick={mostrarConclusiones}>Obtener Resultados</Boton>
        </section>
        <hr /><br />
      </article>
    </Contenedor>
  );
}

const ContendorNodos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 2rem;
    width: 100%;
    flex-wrap: wrap;
`;

const Parrafo = styled.p`
  color: ${(props => props.rojo? '#E34747': 'black')};
  font-size: 1.15rem;
`;

export default App;