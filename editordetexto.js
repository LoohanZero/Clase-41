// Reescribir el código de los siguientes problemas (o desde cero, según corresponda) utilizando funciones.

// Editor de texto Hacer un programa que sea un mini editor de texto. El programa debe inicialmente pedir para ingresar un texto, luego debe preguntar qué es lo que queremos hacer. Opciones:
// "duplicar": duplicar el texto
// "reemplazar": reemplaza un string por otro en el texto
// "agregar": agregar texto
// "cortar": pide dos números de índice entre los cuáles recortar el texto
// "eliminar palabra": elimina una palbra del texto
// "buscar subtexto": busca un string dentro del texto y devuelve un mensaje diciendo si lo encontró o no
// "buscar palabra": busca una palabra dentro del texto y devuelve un mensaje diciendo si lo encontró o no
// "mayusculas": poner todo el texto a mayusculas
// "minusculas": poner todo el texto en minusculas
// "contar letras": mostrar cuántas letras tiene el texto sin espacios
// "contar palabras": mostrar cuántas palabras tiene el texto
// "h4ck3r 5p34k": convierte el texto en "Hacker Speak"
// Al elegir la opción debe mostrar el texto modificado y permitir seguir realizando acciones. Investigar métodos toUpperCase, toLowerCase, replace, includes, slice, substring.


const duplicarTexto = (texto) => {
    return texto + "\n" + texto;
    
}

const reemplazarString = (texto, original, reemplazo) => {
    let textoModificado = texto.replace(original, reemplazo);
    return textoModificado; 
}

const agregarTexto = (texto, string) => {
    return texto + " " + string;
}

const cortarTexto = (texto, x, y) => {
   const textoCortado = texto.substring(x, y + 1);

   return textoCortado;
}

const eliminarPalabra = (texto, palabra) => {
    let textoAModificar = texto.split(' ');
   
    for (let i = 0; i < textoAModificar.length; i++) {
        if (palabra === textoAModificar[i]) {
            textoAModificar.splice(i, 1);
        }
    }
    textoModificado = textoAModificar.join(' ');
    return textoModificado
}

const buscarAlgo = (texto, string) => {
    const hayAlgo = texto.indexOf(string) >= 0;     
    return hayAlgo;
}   
 

const transformarAMayusculas = (texto) => {
    return texto.toUpperCase();
}

const transformarAMinusculas = (texto) => {
    return texto.toLowerCase();
}

const contarLetras = (texto) => {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            contador++;
        }
        
    }
    return contador;
}

const contarPalabras = (texto) => {
    const arrayTexto = texto.split(' ');
    return arrayTexto.length;
}


const aHackerSpeak = (texto) => {
    let stringAArray = texto.split('');

    for (let i = 0; i < stringAArray.length; i++) {
        if (stringAArray[i] === "a" || stringAArray[i] === "A") {
                stringAArray[i] = "4";
        }
        else if (stringAArray[i] === "e" || stringAArray[i] === "E") {
            stringAArray[i] = "3";
        }
        else if (stringAArray[i] === "i" || stringAArray[i] === "I") {
            stringAArray[i] = "1";
        }
        else if (stringAArray[i] === "o" || stringAArray[i] === "O") {
            stringAArray[i] = "0";
        }
        else if (stringAArray[i] === "s" || stringAArray[i] === "S") {
            stringAArray[i] = "5";
        }
        else if (stringAArray[i] === "e" || stringAArray[i] === "E") {
            stringAArray[i] = "3";          
        }
        else {
            stringAArray[i];
        }
    }
    stringAArray = stringAArray.join('');
    return stringAArray;
}
const elegirOpcion = (texto) => {
    // while (seguir) {

        switch (opcion) {
            case "DUPLICAR": {
            texto = duplicarTexto(texto);
        
                alert(`El texto ha sido duplicado: 
                ${texto}`)
            }
            break
            case "REEMPLAZAR": {
                const original = prompt("Ingrese el fragmento que desea reemplazar");
                const reemplazo = prompt("Ingrese el fragmento por el que desea reemplazarlo");
                texto = reemplazarString(texto, original, reemplazo);
                alert(`El texto ha sido reemplazado: 
                ${texto}`)
            }
            break
            case "AGREGAR": {
                const agregado = prompt("Ingrese el texto que desee agregar")
                texto = agregarTexto(texto, agregado);
                alert(`El fragmento ha sido agregado: 
                ${texto}`)
            }
            break
            case "CORTAR": {
                const x = Number(prompt("Ingrese el índice desde el cual desea cortar el texto"));
                const y = Number(prompt("Ingrese el índice hasta el cual desea cortar el texto"))
                texto = cortarTexto(texto, x, y);
                alert(`El texto ha sido modificado: 
                ${texto}`)
            }
            break
            case "ELIMINAR PALABRA": {
                const palabra = prompt("Ingrese la palabra que desea eliminar");
                texto = eliminarPalabra(texto, palabra);
                alert(`La palabra ha sido ha sido modificada: 
                ${texto}`)
            }   
            break
            case "BUSCAR SUBTEXTO": {
                const fragmento = prompt("Ingrese el fragmento que desea encontrar");
                    
                if (buscarAlgo(texto, fragmento)) {
                    alert(`El fragmento está dentro del texto`)
                }
                else {
                    alert(`El fragmento no está dentro del texto`)
                }
            }
            break
            case "BUSCAR PALABRA": {
                const palabra = prompt("Ingrese la palabra que desea buscar");
                if (buscarAlgo(texto, palabra)) {
                    alert(`La palabra está dentro del texto`)
                }
                else {
                    alert(`Palabra no está dentro del texto`)
                }
            }
            break
            case "MAYUSCULAS": {
                texto = transformarAMayusculas(texto)
        
                alert(`Se ha transformado el texto a mayúsculas: 
                ${texto}`)
            }
            break
            case "MINUSCULAS": {
                texto = transformarAMinusculas(texto)
        
                alert(`Se ha transformado el texto a minúsculas: 
                ${texto}`)
            }
            break
            case "CONTAR LETRAS": {
                const cantidad = contarLetras(texto);
                alert(`El texto tiene ${cantidad} letras`)
            }
            break
            case "CONTAR PALABRAS": {
                const cantidad = contarPalabras(texto);
                alert(`El texto tiene ${cantidad} palabras.`)
            }
            break
            case "HACKER SPEAK": 
            texto = aHackerSpeak(texto);
            alert(`El texto se ha convertido a hacker speak:
            ${texto}`)
            break
            case "SALIR":
                seguir = false;
            break            
            default:
                alert("Intente una opción válida");
            break
        }
    // }
}

let seguir = true;
let texto = prompt("Ingrese el texto que desee modificar");
let opcion = "";


while (seguir) {

    opcion = prompt(`El texto a modificar es ${texto}.
¿Qué desea hacer con él?

- Para duplicar el texto, escriba: DUPLICAR
- Para reemplazar un fragmento por otro, escriba: REEMPLAZAR
- Para agregar texto, escriba: AGREGAR
- Para eliminar un fragmento, escriba: CORTAR
- Para eliminar una palabra, escriba: ELIMINAR PALABRA
- Para buscar un fragmento en el texto, escriba: BUSCAR SUBTEXTO
- Para buscar una palabra en el texto, escriba: BUSCAR PALABRA
- Para poner el texto en mayúsculas, escriba: MAYUSCULAS
- Para poner el texto en minúsculas, escriba: MINUSCULAS
- Para contar la cantidad de letras, escriba: CONTAR LETRAS
- Para contar la cantidad de palabras, escriba: CONTAR PALABRAS
- Para cambiar el texto a Hacker Speak, escriba: HACKER SPEAK
- Para salir, escriba: SALIR
`)

    elegirOpcion(texto); 

}

