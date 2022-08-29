import React, { useState } from 'react';
import './App.css';
import Matrices from './components/Matrices';
import Nodo from './components/Nodo';

function App() {
  const [numNodos, setNumNodos] = useState();
  const [nodos, setNodos] = useState([]);
  const [matrizAdya, setMatrizAdya] = useState([]);
  const [matricesGraf, setMatricesGraf] = useState();

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
    conclusiones = <>
      <Matrices
        matriz={matrizAdya}
        titulo={'Matriz de Adyacencia'}
        letraTitulo={'N'}
      />
      <Matrices
        matriz={matrizAdya}
        titulo={'Matriz de Incidencia'}
        letraTitulo={'L'}
      />
      <h1>Número de aristas: {contarAristas(matrizAdya)}</h1>
    </>
    setMatricesGraf(conclusiones);
  }

  function contarAristas(matriz) {
    let acum = 0;
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        acum += matriz[i][j];
      }
    }
    return acum/2;
  }


  return (
    <div className="App">
      <article>
        <h1>Representación y Análisis de Grafos No Dirigidos</h1>
        <p><b>Paso 1:</b> Defina el número de nodos del grafo a representar.</p>
        <form onSubmit={actualizarNodos}>
          <label htmlFor='inp-numNodos'>
            Número de nodos:
            <br />
            <input
              id='inp-numNodos'
              type='number'
              placeholder='Número de nodos'
              min={1}
              onChange={cambiarNumNodos}
            />
          </label>
          <br />
          <button type='submit'>Construir Nodos</button>
        </form>
      </article>
      <hr />
      <article>
        <p><b>Paso 2:</b> Defina las conexiones entre los nodos.</p>
        <section>
          {nodos.map((nodo) => {
            return <Nodo
              key={nodo.id}
              nodo={nodo}
              nodosDeConexion={nodo.nodos}
              matrizAdya={matrizAdya}
              setMatrizAdya={setMatrizAdya}
            />
          })}
        </section>
        <hr />
        <section>
          <p><b>Paso 3:</b> Cuando su grafo esté listo oprima el botón de <b>Obtener Resultados</b> para ver las conclusiones del grafo introducido.</p>
          {matricesGraf}
          <button onClick={mostrarConclusiones}>Obtener Resultados</button>
        </section>
        <br />
      </article>
    </div>
  );
}

export default App;