"use strict";


//Escribe una función que reciba un array de números y devuelva la media de esos numeros

function averageOf(numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total = total + numeros[i];
    }
    return total / numeros.length
}

console.log(averageOf([3, 5, 7, 25]));

//Escribe una función que reciba dos arrays y devuelva true si son iguales o no
function isSame(arr1, arr2) {
    for (i = 0; i < arr1.length; i++) {
        if (!(arr1[i] == arr2[i])) {
            return false;
        }
    }
    return true
}






// # Ejercicio 2

// Escribe un código que, partiendo de un array inicial, elimine las strings repetidas del mismo.
// Cuando sepas hacer funciones, haz que sea una función que reciba el array como parámetro (y por tanto elimine los lementos repetidos de cualquier array).

// ** Ejemplo input: **

// ```javascript
// const names = [
//   "A-Jay",
//   "Manuel",
//   "Manuel",
//   "Eddie",
//   "A-Jay",
//   "Su",
//   "Reean",
//   "Manuel",
//   "A-Jay",
//   "Zacharie",
//   "Zacharie",
//   "Tyra",
//   "Rishi",
//   "Arun",
//   "Kenton",
// ];
// ```

// ** Ejemplo output: **

// ```javascript
// const names = [
//   "A-Jay",
//   "Manuel",
//   "Eddie",
//   "Su",
//   "Reean",
//   "Zacharie",
//   "Tyra",
//   "Rishi",
//   "Arun",
//   "Kenton",
// ];
// ```
const names = [
    "A-Jay",
    "Manuel",
    "Manuel",
    "Eddie",
    "A-Jay",
    "Su",
    "Reean",
    "Manuel",
    "A-Jay",
    "Zacharie",
    "Zacharie",
    "Tyra",
    "Rishi",
    "Arun",
    "Kenton",
];

function prune(names) {
    let uniques = [];
    for (let i = 0; i < names.length; i++) {
        let rep = false;
        let element = names[i];
        for (let j = 0; j < uniques.length; j++) {
            if (uniques[j] == element) {
                rep = true;
                break;
            }
        }
        if (!rep) {
            uniques[uniques.length] = element
        }
    }
    return uniques;
}

console.log(prune(names));