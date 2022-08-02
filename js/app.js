// console.log('yo')

alert(randomNumberAlert())

// funzione per generare un numero casuale da un min a un max
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// mi genero numeri randomici che non siano uguali tra loro
function randomNumberAlert() {
    const numbers = [];
    while (numbers.length < 5) {
        // invoco la funzione per i numeri random
        const n = getRandomIntInclusive(1,100);
        // controllo se il numero generato non è nell'array e lo pusho
        if (!numbers.includes(n)) {
            numbers.push(n);
        }
    }
    // console.log(numbers)
    return numbers
}
    