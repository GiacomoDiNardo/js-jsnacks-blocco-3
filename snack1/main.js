let numbersContainer = [];
let i = 0;
let somma = 0;


while (i < 50) {
    let askNumber = parseInt(prompt("Inserisci un numero"));
    if (isNaN(askNumber)) {
        console.log("Sono ammesse solo cifre");
    } else {
        numbersContainer.push(askNumber);
        somma += askNumber;

        i = somma;

        console.log("la somma " + somma);
        console.log("valore i " + i);
        console.log(askNumber);
        console.log(numbersContainer);
    }
}
