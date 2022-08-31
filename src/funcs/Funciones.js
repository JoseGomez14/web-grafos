const matrizIncidencia = (matrizAdya) => {
    let colRef = [];
    let estadoIncidencia = false;
    for (let i = 0; i < matrizAdya.length; i++) { colRef.push(false) }

    let matrizInci = [];
    for (let col = 1; col < matrizAdya.length; col++) {
        for (let row = 0; row < col; row++) {
            let colRefAux = colRef.slice();
            if (matrizAdya[row][col]) {
                colRefAux[row] = true;
                colRefAux[col] = true;
                matrizInci.push(colRefAux);
                estadoIncidencia = true;
            }
        }
    }

    if (estadoIncidencia) { return transponerMatriz(matrizInci) }
    else { return null }
}

const esCompleto = (matrizAdya, numAristas) => {
    let vertices = matrizAdya.length;
    return numAristas === (vertices * (vertices - 1)) / 2;
}

const esRegular = (matrizAdya) => {
    let sumaAnt = 0;
    for (let i = 0; i < matrizAdya.length; i++) {
        let sumaFila = 0;
        for (let j = 0; j < matrizAdya[i].length; j++) {
            sumaFila += matrizAdya[i][j];
        }
        if (i !== 0 && sumaAnt !== sumaFila) {
            return false;
        }
        sumaAnt = sumaFila;
    }
    return true;
}

const esEuleriano = (matrizAdya, numAristas) => {
    let nVertices = matrizAdya.length;
    return false;
}

const transponerMatriz = (matriz) => {
    let matrizTransp = [];

    for (let x = 0; x < matriz[0].length; x++) {
        let filaAux = [];
        for (let y = 0; y < matriz.length; y++) {
            filaAux.push(matriz[y][x]);
        }
        matrizTransp.push(filaAux);
    }
    return matrizTransp
}

export { matrizIncidencia, esCompleto, esRegular, esEuleriano };