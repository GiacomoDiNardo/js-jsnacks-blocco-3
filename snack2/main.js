const arrayNumber = parseInt(prompt("Inserisci un numero"));
let arrayContainer = []

let i = 0

while (i < arrayNumber) {
    let randomArray = []
    let j = 0

    while (j < 10) {

        randomArray.push(Math.floor(Math.random() * 100))
        j++
    }

    arrayContainer.push(randomArray)

    i++

    console.log("numeri random " + randomArray);
}

console.log("container di array " + arrayContainer + " ");
