const arrayNumber = parseInt(prompt("Inserisci un numero da 1 a 10"));
let arrayContainer = [];
let displayNumbers = document.getElementById("numbers");
let i = 0;

if (arrayNumber >= 1 && arrayNumber <= 10) {

    while (i < arrayNumber) {
        let randomArray = [];
        let j = 0;

        while (j < 10) {

            randomArray.push(Math.floor(Math.random() * 100));
            j++;
        }

        arrayContainer.push(randomArray);

        i++;

        console.log("numeri random " + randomArray);
    }

    console.log("container di array " + arrayContainer + " ");
    displayNumbers.innerHTML = arrayContainer.join(" - ");

} else {
    displayNumbers.classList.add("text-danger");
    displayNumbers.innerHTML = "*Inserisci un Numero valido*";
}