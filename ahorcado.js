// Ahorcado Crear el juego del ahorcado. El programa debe contar ya con una lista de posibles palabras. Debe mostrar inicialmente la palabra elegida aleatoriamente oculta con asteriscos, e ir preguntando por letras. A medida que se aciertan letras que contenga la palabra, se debe mostrar la palabra con las letras descubiertas. También se puede ingresar una palabra, pero si no se la adivina se pierde el juego. Si se adivinan todas las letras de la palabra, o se acierta la palabra, se gana. Si se intenta adivinar la palabra pero se equivoca, o se ingresan 6 letras erróneas, se pierde. Ejemplo:
// La palabra es ************. Te quedan 6 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "a"
// La palabra es **********a*. Te quedan 6 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "e"
// La palabra es e*e*******a*. Te quedan 6 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "i"
// La palabra es e*e***i*i*a*. Te quedan 6 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "m"
// La palabra es e*e***i*i*a*. Te quedan 5 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "s"
// La palabra es e*e***i*i*a*. Te quedan 4 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "c"
// La palabra es e*ec**ici*a*. Te quedan 4 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "d"
// La palabra es e*e***i*idad. Te quedan 4 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "electricidad"
// Felicitaciones, has adivinado la palabra.



const chooseWord = (words) => {
    const randomNumber = Math.round(Math.random() * 9);
    const randomWord = words.slice(randomNumber, (randomNumber + 1));

    return randomWord;
}
const transformLetters = (hiddenWord) => {
    for (let i = 0; i < hiddenWord.length; i++) {
        if (hiddenWord[i] !== "*") {
            hiddenWord[i] = "*";
        }
    }
    return hiddenWord;
}
const showLetter = (forGuessing, hiddenWord) => {
    for (let i = 0; i < forGuessing.length; i++) {

        if (forGuessing[i] === playerMove) {
            hiddenWord[i] = playerMove;
        }
    }
    return hiddenWord;
}

const compareBeforeAndAfterMove = (beforeMove, hiddenWord, counter) => {
    if (playerMove === forGuessing.join('')) {
        counter += 0;
    }
    else if (beforeMove === hiddenWord.join('')) {
        counter -= 1;
    }

    return counter
}

const checkIfGameLost = (playerMove, forGuessing, counter, hiddenWord) => {
    let lostGame = playerMove !== forGuessing.join('') && 
    counter > 0 && 
    playerMove.length <= 1 && 
    forGuessing.join('') !== hiddenWord.join('');

    return lostGame
}

const words = ["cualquiera", "pensionado", "esclerosis", "caleidoscopio", "electroencefalografista", "desoxirribonucleico", "pasteurizado", "idiosincrasia", "metacrilato", "transportista"];

let wordForGuessing = chooseWord(words);
let counter = 6;

let forGuessing = wordForGuessing.toString().split("");
let hiddenWord = forGuessing.slice(0, forGuessing.length + 1)

hiddenWord = transformLetters(hiddenWord);
playerMove = "a";
lostGame = checkIfGameLost(playerMove, forGuessing, counter, hiddenWord);

while (lostGame) {    
    const beforeMove = hiddenWord.join(' ');
    
    playerMove = prompt(`La palabra a adivinar es ${beforeMove}. Te quedan ${counter} equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra.`);

    hiddenWord = showLetter(forGuessing, hiddenWord);
    
    counter = compareBeforeAndAfterMove(beforeMove, hiddenWord, counter);

    lostGame = checkIfGameLost(playerMove, forGuessing, counter, hiddenWord);
    

}

if (counter === 0 && playerMove !== forGuessing.join('') ) {
    alert(`¡Has perdido! La palabra era ${forGuessing.join('')}`)
}
else if (counter === 0 && playerMove === forGuessing.join('') ) {
    alert(`¡Has ganado! La palabra era ${forGuessing.join('')}`)
}
else if (playerMove === forGuessing.join('')) {
    alert(`¡Has ganado! La palabra era ${forGuessing.join('')}`)
}
else if (forGuessing.join('') === hiddenWord.join(''))
    alert(`¡Has ganado! La palabra era ${forGuessing.join('')}`)
else {
    alert(`¡Has perdido! La palabra era ${forGuessing.join('')}`)
}