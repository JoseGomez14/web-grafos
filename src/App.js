import React, { useState } from 'react';
import {matrizIncidencia, esCompleto, esRegular, esEuleriano} from './funcs/Funciones'
import {Contenedor, ContendorNodos, P} from './elements/Pprincipal';
import './App.css';
import Input from './elements/Input';
import Nodo from './components/Nodo';
import Boton from './elements/Boton';
import Matrices from './components/Matrices';
import DibujoGrafo from './funcs/FuncionesGraficas';

function App() {
  const [numNodos, setNumNodos] = useState();
  const [nodos, setNodos] = useState([]);
  const [matrizAdya, setMatrizAdya] = useState([]);
  const [resultadosAnalisis, setResultadosAnalisis] = useState();

  const actualizarNodos = (evt) => {
    evt.preventDefault();
    let arrNodos = [];
    let matrizAux = [];
    let matrizAuxColumnas = [];

    // Crea el arreglo de nodos
    for (let i = 1; i <= numNodos; i++) {
      arrNodos.push({
        nombre: "N" + i,
        id: i - 1
      });
      matrizAuxColumnas.push(false);
    }

    //Crea los nodos de conexión
    for (let i = 0; i < arrNodos.length; i++) {
      let nodosDeConexion = [];
      for (let j = 0; j < arrNodos.length; j++) {
        if (j !== i) {
          nodosDeConexion.push(arrNodos[j]);
        }
      }
      matrizAux.push(matrizAuxColumnas);
      arrNodos[i] = { ...arrNodos[i], nodos: nodosDeConexion };
    }

    setNodos(arrNodos);
    setMatrizAdya(matrizAux);
  }

  const cambiarNumNodos = (e) => {setNumNodos(e.target.value)}

  const mostrarConclusiones = () => {
    let matrizInci = matrizIncidencia(matrizAdya);
    let numAristas = matrizInci != null? matrizInci[0].length: 0;

    let conclusiones = matrizAdya.length > 0?
      <>
        <Matrices matriz={matrizAdya} titulo={'Matriz de Adyacencia'} letraTitulo={'N'}/>
        
        {matrizInci !== null?
        <Matrices matriz={matrizInci} titulo={'Matriz de Incidencia'} letraTitulo={'L'}/>
        :<P rojo>El grafo no tiene aristas, por lo tanto, no se construye <b>la matriz de incidencia.</b></P>
        }

        <P><b>Número de aristas: {numAristas}</b></P>
        <P><b>Grafo completo: {esCompleto(matrizAdya, numAristas)? 'Si': 'No'}</b></P>
        <P><b>Grafo regular: {esRegular(matrizAdya)? 'Si': 'No'}</b></P>
        <P><b>Grafo Euleriano: {esEuleriano(matrizAdya)? 'Si': 'No'}</b></P>
        <br/>
        <P><b>Gráfico del Grafo</b></P>
        <DibujoGrafo matrizInci={matrizInci} numNodos={matrizAdya.length} numAristas={numAristas}/>
        <br/>
      </>
    :<P rojo>Aún no hay datos en el grafo.</P>

    setResultadosAnalisis(conclusiones);
  }

  return (
    <Contenedor className="App">
      <article>
        <h1>Representación y Análisis de Grafos No Dirigidos</h1>
      </article>
      <article>
        <P><b>Paso 1:</b> Defina el número de nodos del grafo a representar.</P>
        <form onSubmit={actualizarNodos}>
          <Input id='inp-numNodos' type='number' placeholder='Número de nodos' min='1' max='40'
            onChange={cambiarNumNodos}
          /><br/>
          <Boton type='submit'>Construir Nodos</Boton>
        </form>
      </article>

      <article>
        <P><b>Paso 2:</b> Defina las conexiones entre los nodos.</P>
        <ContendorNodos>
          {nodos.map((nodo) => {
            return <Nodo key={nodo.id}
              nodo={nodo}
              matrizAdya={matrizAdya}
              setMatrizAdya={setMatrizAdya}
            />
          })}
        </ContendorNodos>
      </article>

      <article>
        <P><b>Paso 3:</b> Cuando su grafo esté listo oprima el botón de <b>Obtener Resultados</b> para ver las conclusiones del grafo introducido.</P>
          {resultadosAnalisis}
        <Boton onClick={mostrarConclusiones}>Obtener Resultados</Boton>
      </article>
      <article>
        <h3>Universidad de Antioquia</h3>
        <p>Facultad de Ingeniería - Ing de Sistemas</p>
        <p>Matemáticas Discretas II - 2022-1/G2</p><br/>
        <p>Desarrollado por:</p>
        <p>Jose David Gómez Muñetón</p>
        <p>Emanuel López Higuita</p>
        <p>Rony Santiago Bañol Rico</p>
      </article>
    </Contenedor>
  );
}

export default App;