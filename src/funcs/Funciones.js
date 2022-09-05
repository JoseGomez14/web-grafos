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
        for (let j = 0; j < matrizAdya.length; j++) {
            sumaFila += matrizAdya[i][j];
        }
        if (i !== 0 && sumaAnt !== sumaFila) return false;
        sumaAnt = sumaFila;
    }
    return true;
}

const esEuleriano = (matrizAdya) => {
    //let contNodosImp = 0;
    let contNodosPar = 0;
    matrizAdya.forEach(row => {
        let sumaFila = 0;
        row.forEach(col => {
            sumaFila += col;
        })
        //if (sumaFila % 2 !== 0 && sumaFila > 0) contNodosImp++
        if (sumaFila % 2 === 0 && sumaFila > 0) contNodosPar++
    });

    if (esConexo(matrizAdya)) {
        if (contNodosPar === matrizAdya.length) return true;
        //else if((contNodosImp === 2) && contNodosPar > 0) return true;
    }
    return false;
}

function elevarMatriz(matrizA, matrizB) {
    let n = matrizA.length,
        m = new Array(n); // initialize array of rows

    for (let r = 0; r < n; ++r) {
        m[r] = new Array(n); // initialize the current row
        for (let c = 0; c < n; ++c) {
            m[r][c] = 0; // initialize the current cell
            for (let i = 0; i < n; ++i) {
                m[r][c] += matrizA[r][i] * matrizB[i][c];
            }
        }
    }
    return m;
}

function suma(a, b) {
    let n = a.length;
    let c = new Array(n);

    for (let i = 0; i < n; i++) {
        c[i] = new Array(n);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            c[i][j] = a[i][j] + b[i][j];
        }
    }
    return c;
}

function esConexo(matrizAdya) {
    let n = matrizAdya.length;
    let ca = matrizAdya; //Matriz Copia
    let s = ca; // Almacena la suma de las matrices
    let p = ca; // Matriz que almacena las potencias

    for (let i = 0; i < n - 2; i++) {
        p = elevarMatriz(p, ca);
        s = suma(s, p);
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[i][j] === 0) return false
        }
    }

    return true;
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