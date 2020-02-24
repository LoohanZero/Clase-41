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
    // const randomWord = words.slice(randomNumber, (randomNumber + 1));

    return words[randomNumber];
}

const splitWord = (word) => {
    const splittedWord = word.split('');

    return splittedWord;
}

const joinWord = (array) => {
    const joinedArray = array.join('');

    return joinedArray;
}
const transformLetters = (word) => {
    let hideWord = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== "*") {
           hideWord[i] = "*";
        };
    };

    return hideWord;
}
const showLetter = (word, hiddenWord) => {
    for (let i = 0; i < word.length; i++) {

        if (word[i] === playerMove) {
            hiddenWord[i] = playerMove;
        }
    }


    return hiddenWord;
}

const compareBeforeAndAfterMove = (word, hiddenWord, counter) => {
    if (word.includes(playerMove)) {
        counter += 0;
    }
    else {
        counter -= 1;
    }

    return counter
}

const checkIfGameLost = (playerMove, word, counter, hiddenWord) => {
    let lostGame = playerMove !== word && 
    counter > 0 && 
    playerMove.length <= 1 && 
    word !==  joinWord(hiddenWord);

    return lostGame
}

const words = ["cualquiera", "pensionado", "esclerosis", "caleidoscopio", "electroencefalografista", "desoxirribonucleico", "pasteurizado", "idiosincrasia", "metacrilato", "transportista"];

let word = chooseWord(words);
splittedWord = splitWord(word);

let hiddenWord = transformLetters(splittedWord);

let counter = 6;
playerMove = "a";
lostGame = checkIfGameLost(playerMove, word, counter, hiddenWord);

while (lostGame) {    

    playerMove = prompt(`La palabra a adivinar es ${joinWord(hiddenWord)}. Te quedan ${counter} equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra.`);

    hiddenWord = showLetter(splittedWord, hiddenWord);
    
    counter = compareBeforeAndAfterMove(splittedWord, hiddenWord, counter);

    lostGame = checkIfGameLost(playerMove, word, counter, hiddenWord);
    

}

gameWon = counter === 0 && playerMove === word || 
          playerMove === word ||
          word === joinWord(hiddenWord);

if (gameWon) {
    alert(`¡Has ganado! La palabra era ${word}`)
}
else {
    alert(`¡Has perdido! La palabra era ${word}`)
}