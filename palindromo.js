//Crea una función que reciba un string y devuelva true si es un palíndromo
"use strict"
const ejstring1 = "Arriba la birra"
const ejstring2 = "Dabale arroz a la zorra el abad"


function esPalindromo(string) {
    string = string.replaceAll(" ", "").toLowerCase().split().reverse().join();
    string = string.toLowerCase();
    let arrOriginal = [];
    arrOriginal = string.split("");
    let arrCopia = arrOriginal.reverse()
    for (let i = 0; i < arrOriginal.length; i++) {
        if (arrOriginal[i] != arrCopia[i]) {
            return false
        }
    }
    return true
}
console.log(esPalindromo(ejstring1))
console.log(ejstring1);
console.log(esPalindromo(ejstring2))
console.log(ejstring2);