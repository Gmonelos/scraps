"use strict"

function calculadora(numA, operador, numB) {
    let resultado;
    switch (operador) {
        case "+":
            console.log("esto es una suma")
            resultado = (numA + numB);
            break;

        case "-":
            resultado = (numA - numB)
            break;

        case "x":
            resultado = (numA * numB)
            break;

        case "/":
            resultado = (numA / numB)
            break

        default:
            console.log("esto es un fallo")
            resultado = ("operacion no reconocida")

    }
    return resultado
}

console.log(calculadora(3, "z", 3));

let numero1 = parseFloat(prompt("num1"));
let operador = prompt("operador");
let numero2 = parseFloat(prompt("num2"));

console.log(calculadora(numero1, operador, numero2));


console.log(calculadora(6, "+", 4));