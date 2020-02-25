// Monstruo

// Crear un juego de combate contra un monstruo. El juego debe contar con las siguientes variables:
// Vida jugadora
// Vida monstruo
// Cantidad de pociones
// Ataque máximo jugadora
// Ataque máximo monstruo
// Curación máxima poción
// Todos los valores anteriores deben ser números enteros
// El juego debe tener las siguientes acciones posibles:
// ATACAR MONSTRUO: genera un número aleatorio entre 1 y Ataque máximo jugadora y lo resta a Vida monstruo
// TOMAR POCION: genera un número aleatorio entre 1 y Curación máxima poción y lo suma a Vida jugadora y resta 1 a Cantidad de pociones
// BUSCAR POCION: genera un número entre 1 y 4, si sale 1 suma una poción, sino no encuentra nada
// SALIR: termina el programa
// En todo momento se debe mostrar un mensaje de lo que está pasando
// Luego de cada acción, el monstruo ataca a la jugadora y le resta a Vida jugadora un número aleatorio entre 1 y Ataque máximo monstruo
// Luego del ataque del monstruo, se debe mostrar la vida de ambos
// El programa termina cuando o la jugadora o el monstruo se quedan con vida igual o menor a 0
// Mostrar un mensaje con el resultado final



let vidaJugador = 10;
let vidaMonstruo = 10; 
let cantidadDePociones = 2;
let AtaqueMaximo = 5;
let curacionMaxima = 10;

const atacarMonstruo = (vidaMonstruo) => {
    const randomNumber = (Math.round(Math.random() * (AtaqueMaximo - 1))) + 1;

    vidaMonstruo -= randomNumber;
    return vidaMonstruo;
}

const tomarPocion = (vidaJugador, curacionMaxima) => {
    const randomNumber = (Math.round(Math.random() * (curacionMaxima - 1))) + 1;

        for (let i = 0; i < randomNumber; i++) {
            // vidaJugador = vidaJugador < 10 ? +1 : 0;
            
            
            if (vidaJugador < 10) {
                vidaJugador += 1;

            }
            else {
                vidaJugador;
            }
            
        }
    
    return vidaJugador;
}

const buscarPocion = (cantidadDePociones) => {
    const randomNumber = Math.round(Math.random() * 4) + 1;
    if (randomNumber === 1) {
        cantidadDePociones += 1;
        alert("¡Has encontrado una poción!")
    }
    else {
        alert("No había nada. =(")
    }
    return cantidadDePociones;
}

const atacarAJugador = (vidaJugador) => {
    const randomNumber = (Math.round(Math.random() * (AtaqueMaximo - 1))) + 1;

    vidaJugador -= randomNumber;
    return vidaJugador;
}

const verificarMuerte = (vidaJugador, vidaMonstruo) => {
    if (vidaJugador <= 0) {
        alert(`¡Has perdido! Recuperate e intentalo de nuevo`);
        seguir = false;
    }
    if (vidaMonstruo <= 0) {
        alert(`¡Has ganado! Tomate un brebaje para festejar`)
        seguir = false;

    }
    return seguir;
}

const mostrarMuerte = (vida) => {
    if (vida < 0) {
        vida = 0
    }
    return vida;
}

const tomarDecisiones = (decision, vidaMonstruo, vidaJugador, cantidadDePociones, curacionMaxima, seguir) => {
    switch (decision) {
        case "ATACAR":
            vidaMonstruo = atacarMonstruo(vidaMonstruo);
            vidaMonstruo = mostrarMuerte(vidaMonstruo);

            alert(`¡Has atacado al monstruo! 
            Tu vida: ${vidaJugador}
            Vida del Monstruo: ${vidaMonstruo}`);

            seguir = verificarMuerte(vidaJugador, vidaMonstruo); 
            
         
            

        break
        case "TOMAR POCION":
            if (cantidadDePociones > 0) {
            vidaJugador = tomarPocion(vidaJugador, cantidadDePociones, curacionMaxima);
            alert(`¡La poción te ha recuperado! 
            Tu vida: ${vidaJugador};
            Vida del Monstruo: ${vidaMonstruo}`);
            cantidadDePociones -= 1;
            }
            else {
                alert("¡No tienes más pociones!")
            }

        break
        case "BUSCAR POCION":
            cantidadDePociones = buscarPocion(cantidadDePociones);


        break
        case "HUIR":
            seguir = false;
            alert(`Soldado que huye sirve para otra guerra.`)
        break
        default:
            alert("Escribe una opción válida");
        break
    }

}

let seguir = true;

while (seguir) {

    const decision = prompt(`¡Un Monstruo!
    Tu vida está en: ${vidaJugador}
    La vida del monstruo en: ${vidaMonstruo}
    Echas un ojo a tu bolso y tienes ${cantidadDePociones} pociones curativas.
    ¿Qué deseas hacer?
    
    - Para atacar al monstruo, escribe: ATACAR
    - Para tomar una poción curativa y restaurar tu maná, escribe: TOMAR POCION
    - ¿Te has quedado sin pociones? Busca más escribiendo: BUSCAR POCION 
    - ¿Necesitas huir y dejar la batalla para otro momento? Escribe: HUIR`)

    tomarDecisiones(decision, vidaMonstruo, vidaJugador, cantidadDePociones, curacionMaxima, seguir);

    if (seguir) {

        vidaJugador = atacarAJugador(vidaJugador);
        vidaJugador = mostrarMuerte(vidaJugador);
        
        alert(`¡El monstruo te ha atacado! 
            Tu vida: ${vidaJugador}
            Vida del Monstruo: ${vidaMonstruo}`);

        seguir = verificarMuerte(vidaJugador, vidaMonstruo); 
    }
}