// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero un numero random per l'utente
let userNumber = Math.floor(Math.random() * 7);
alert(`il tuo numero è ${userNumber}`);

// Genero un numero random per il computer
let computer = Math.floor(Math.random() * 7);
alert(`il numero del computer è ${computer}`);

// Stabilisco il vicitore fra l'utente e il computer
let message;
if(userNumber > computer) {
    message = `Complimenti hai vinto`;
}else{
    message = `Mi dispiace ha vinto il computer`;
}
// Stampo il vincitore
alert(message);