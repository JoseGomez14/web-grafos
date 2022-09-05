import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';

let nFilas = 0;

const DibujoGrafo = ({matrizInci, numNodos, numAristas}) => {
    
    const canvasRef = useRef(null)

    const limpiarCanvas = (ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }
  
    const dibujarNodo = (ctx, x, y) => {
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(x, y, 10, 0, 2*Math.PI)
        ctx.fill()
        ctx.closePath();
    }

    const dibujarArista = (ctx, nodo1, nodo2) => {
        ctx.beginPath()
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#000';
        ctx.moveTo(nodo1.x, nodo1.y);
        ctx.lineTo(nodo2.x, nodo2.y);
        ctx.stroke();
        ctx.closePath();
    }

    const dibujarTitulo = (ctx, texto, x, y, color) => {
        ctx.font = '22px Arial';
        ctx.fillStyle = color || '#FF0000';
        ctx.strokeStyle = '#FFF';
        ctx.textAlign = 'center';
        ctx.strokeText(texto, x, y);
        ctx.fillText(texto, x, y);
      }

    const posNodos = posicionesNodos(numNodos);
    const altura = (nFilas * 150) - 20;

    useEffect(() => {
        
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        limpiarCanvas(context);

        for (let j = 0; j < numAristas; j++) {
            let idxNodo1 = -1;
            for (let i = 0; i < matrizInci.length; i++) {
                if(matrizInci[i][j] && idxNodo1 === -1){
                    idxNodo1 = i;
                    i++;
                }
                if(matrizInci[i][j]){
                    dibujarArista(context, posNodos[idxNodo1], posNodos[i]);
                    //dibujarTitulo(context, 'L' + (j + 1), (posNodos[idxNodo1].x + posNodos[i].x)/2, (posNodos[idxNodo1].y + posNodos[i].y)/2, '#0000FF')
                    i = matrizInci.length;
                }
            }            
        }

        posNodos.forEach((nodo, index) => {
            dibujarNodo(context, nodo.x, nodo.y);
            dibujarTitulo(context, 'N' + (index + 1), nodo.x, nodo.y -15);
        });
      })

  return <Canvas ref={canvasRef} width='450px' height={altura + 'px'}/>
}

const posicionesNodos = (nodos) => {
    let numNodos = nodos;
    nFilas = 0;
    let posiciones = [];

    while (numNodos > 0) {
        if (numNodos === 1) {
            posiciones.push({x: 225, y: ((nFilas * 150) + 75)});
            numNodos -= 1;
        } else {
            posiciones.push({x: 150, y: ((nFilas * 150) + 75)});
            posiciones.push({x: 300, y: ((nFilas * 150) + 75)});
            numNodos -= 2;
        }
        nFilas++;

        if (numNodos >= 3) {
            if (numNodos === 1) {
                posiciones.push({x: 225, y: ((nFilas * 150) + 75)});
                numNodos -= 1;
            } else if (numNodos === 2) {
                posiciones.push({x: 150, y: ((nFilas * 150) + 75)});
                posiciones.push({x: 300, y: ((nFilas * 150) + 75)});
                numNodos -= 2
            } else {
                posiciones.push({x: 75, y: ((nFilas * 150) + 75)});
                posiciones.push({x: 225, y: ((nFilas * 150) + 75)});
                posiciones.push({x: 375, y: ((nFilas * 150) + 75)});
                numNodos -= 3;
            }
            nFilas++;
        }
    }

    return posiciones;
}

const Canvas = styled.canvas`
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    margin-bottom: 20px;
`

export default DibujoGrafo;