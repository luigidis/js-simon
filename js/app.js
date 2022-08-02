// console.log('yo')
// creo il mio array con i numeri corretti
const correctNumbers = randomNumberAlert(5);
alert(correctNumbers);
console.log(correctNumbers)

setTimeout (userNumbersGet(), 30000);


// Funzione che mi crea un array con i numeri digitati

function userNumbersGet () {
    let userNumbers = [];
    let i = 0
    while (userNumbers.length < 5) {
        const number = parseInt(prompt('Digita numero' + '\n' + (i + 1)));
            if (!userNumbers.includes(number)) {
                userNumbers.push(number);
                i++
                // console.log(userNumbers)
            } else {
                alert('Inserisci Numeri Validi')
            }
        }
        console.log(userNumbers);
        // return userNumbers
        endGame(userNumbers);
        
}

// funzione che confronta i due array 
function getTheArray (array1,array2) {
    let i = 0;
    array1.forEach(element => {
        console.log(element, array2[i])
        if (element === array2[i]) {
            i++
            return true
        } else {
            return false
        }
        
    });
            
}
// funzione di fine gioco
function endGame (array) {
    console.log(array,correctNumbers);
    const end = getTheArray(array,correctNumbers);
    console.log(end);
    if (end) {
        alert('HAI VINTO')
    } else {
        alert('HAI PERSO')
    }
}
    
    

// funzione per generare un numero casuale da un min a un max
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// mi genero numeri randomici che non siano uguali tra loro
function randomNumberAlert(max) {
    const numbers = [];
    while (numbers.length < max) {
        // invoco la funzione per i numeri random
        const n = getRandomIntInclusive(1,100);
        // controllo se il numero generato non è nell'array e lo pusho
        if (!numbers.includes(n)) {
            numbers.push(n);
        }
    }
    // console.log(numbers);
    return numbers;
}
    