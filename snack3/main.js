let i = 0
let somma = 0


while (i < 5) {
    let askNumber = parseInt(prompt("Inserisci un numero"));
    somma += askNumber

    i++
    console.log(askNumber);
}

console.log("La somma è " + somma);