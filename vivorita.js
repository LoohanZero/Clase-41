// Viborita

// Crear un programa que permita controlar una viborita.
// El programa debe mostrar el tablero en todo momento.
// Debe permitir ingresar las direcciones para donde desea mover la víbora: ARRIBA, DERECHA, ABAJO, IZQUIERDA, y moverla en consecuencia.
// El objetivo es comer todas las manzanas, el juego termina cuando no hay más manzanas.
// Para comer una manzana, debe moverse hacia ella.
// Si la vibora llega esta en el borde del tablero, y se mueve hacia este, debe aparecer del otro lado del mismo.
// Si se intenta avanzar a un casillero bloqueado (en el ejemplo, un ladrillo) no debe poder avanzar.
// En vez de emojis se pueden usar letras.

const encontrarViborita = (tablero) => {
    for (let i =  0; i < tablero.length; i++) {

        for(let j = 0; j < tablero[i].length; j++) 
        {
            if (tablero[i][j] === '🐍') {
                return [i, j]
            }   

        }
    }
}

const contarManzanas = (tablero) => {
    let manzana = 0;
    for (let i =  0; i < tablero.length; i++) {

        for(let j = 0; j < tablero[i].length; j++) 
        {
            if (tablero[i][j] === '🍎') {

                if (tablero[i][j] === '🍎') {
                    manzana += 1;
                }
            }
            
        }
    }
    return manzana;
}

const mostrarTablero = (tablero) => {
   const presentacionTablero = 
   `${tablero[0]}
    ${tablero[1]}
    ${tablero[2]}
    ${tablero[3]}
    ${tablero[4]}
    ${tablero[5]}`

    return presentacionTablero
}

const moverJugador = (tablero, iJ, jJ, direccion) => {
    const coordenadas = proximoMovimiento(tablero, iJ, jJ, direccion);
    const casillaFutura = tablero[coordenadas[0]][coordenadas[1]]; 

        if (casillaFutura === '🧱') {
            alert(`No puede pasar porque hay una pared, intente otra opción.
            ${mostrarTablero(tablero)}`)
        }
        else {
            tablero[iJ][jJ] = '🌱';
            tablero[coordenadas[0]][coordenadas[1]] = '🐍';
        }
}

const proximoMovimiento = (tablero, iJ, jJ, direccion) => {
    const coordenadas = [];

    switch (direccion) {

        case "DERECHA": {
            const j = tablero[iJ][jJ + 1] ? jJ + 1 : 0; 
            coordenadas.push(iJ, j);
        }
        break

        case "IZQUIERDA": {
            const j = tablero[iJ][jJ - 1] ? jJ - 1 : tablero[iJ].length - 1; 
            coordenadas.push(iJ, j);
        }
        break

        case "ARRIBA": {
            const i = tablero[iJ - 1] ? iJ - 1 : tablero.length - 1; 
            coordenadas.push(i, jJ);
        }
        break

        case "ABAJO": {
            const i = tablero[iJ + 1] ? iJ + 1 : 0; 
            coordenadas.push(i, jJ);
        }
        break

        default: 
            coordenadas.push(iJ, jJ);
        break
    }
    return coordenadas
}

const tablero = 
[
    ['🌱', '🌱', '🍎', '🌱', '🌱'],
    ['🍎', '🧱', '🌱', '🧱', '🍎'],
    ['🌱', '🧱', '🐍', '🌱', '🌱'],
    ['🌱', '🍎', '🌱', '🧱', '🌱'],
    ['🍎', '🌱', '🌱', '🍎', '🧱'],
    ['🌱', '🌱', '🌱', '🌱', '🍎'],    
];


while (contarManzanas(tablero)) {
    const coordenadas = encontrarViborita(tablero);

   
    const direccion = prompt(`¿Desea mover a la viborita hacia ARRIBA, ABAJO, DERECHA o IZQUIERDA?
    ${mostrarTablero(tablero)}`);

    moverJugador(tablero, coordenadas[0], coordenadas[1], direccion);

}

alert(`¡Usted ha ganado!

        ${mostrarTablero(tablero)}`)
