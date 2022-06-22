"use strict"
//Crea la funcion isEven. Recibirá un número y devolverá true si el número es par
function isEven(numero) {
    return ((numero % 2) === 0)
}
//Crea la función isDivisible. Recibe dos números y devuelve true si el primero es divisible entre el segundo y false si no
function isDivisible(num1, num2) {
    return ((num1 % num2) === 0)
}
//Crea la función isPrime. Recibe un número y devuelve true si es primo y false si no.
function isPrime(num) {
    let tope = Math.sqrt(num);
    for (let i = 2; i <= tope; i++) {
        if (isDivisible(num, i)) {
            return false;
        }
    }
    return true
}
//Crea una función que recibe un número y saque por consola todos los primos hasta ese número.
function primoHasta(max) {
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}



console.log(isEven(2));

console.log(isEven(3));

console.log(isDivisible(2, 3));

console.log(isDivisible(4, 4));

console.log(isPrime(3));
console.log(isPrime(8));
console.log(primoHasta(200));