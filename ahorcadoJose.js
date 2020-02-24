// Ahorcado Crear el juego del ahorcado. El programa debe contar ya con una lista de posibles palabras. Debe mostrar inicialmente la palabra elegida aleatoriamente oculta con asteriscos, e ir preguntando por letras. A medida que se aciertan letras que contenga la palabra, se debe mostrar la palabra con las letras descubiertas. También se puede ingresar una palabra, pero si no se la adivina se pierde el juego. Si se adivinan todas las letras de la palabra, o se acierta la palabra, se gana. Si se intenta adivinar la palabra pero se equivoca, o se ingresan 6 letras erróneas, se pierde.


const palabras = ["jinete", "bandera", "apartarse", "finanzas", "colmillo", "etiqueta", "sacacorchos", "rastrillar", "amontonar", "escritorio"];

const obtenerElementoRnd = (arr) =>{
    const indiceRandom = Math.round(Math.random() * (arr.length - 1));
    return arr[indiceRandom];
}

const mostrarPalabra = (texto, letras = [])=>{
    let palabraOculta = "";
    for (let i = 0; i < texto.length; i++) {
        palabraOculta+=letras.includes(texto[i]) ? texto[i]: "*";                       
    } 
    return palabraOculta;
}

const esLetra = (ingreso) => ingreso !== null && ingreso.length===1;

let letras = [];

const palabra = obtenerElementoRnd(palabras);
let juegoTermino = false;

alert("La palabra a adivinar es: " + mostrarPalabra(palabra));
console.log(palabra);

while(letras.length<=5 && !juegoTermino){
    const ingreso = prompt("Ingrese una palabra o letra, recuerde que solo tiene 6 intentos. Si ingresa la palabra y no acierta perdio el juego");   
    if(esLetra(ingreso)){
        letras.push(ingreso);
        alert("Agregamos una pista: " + mostrarPalabra(palabra, letras));
    } else {
        const mensaje = ingreso===palabra ? `Adivino la palabra ${palabra} CAMPEON` : `No adivino la palabra, era ${palabra}, perdio`
        alert(mensaje);
        juegoTermino = true;       
    }  
}


if(letras.length>5){
    alert(`Agoto todos los intentos, la palabra era ${palabra}`);
}