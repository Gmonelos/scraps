"use strict";
/* Ejercicio 4

Partiendo de un objeto que incluye una serie de personaas con sus respectivas edades, saca por consola un mensaje por cada persona que diga "_Nombre_ es mayor de edad" o "_Nombre_ es menor de edad", según corresponda.
Cuando sepas hacer funciones, haz que sea una función que reciba el objeto como parámetro.
*/
function sonMayores(personas) {
    let nombres = Object.getOwnPropertyNames(personas);
    console.log(nombres);
    for (let i = 0; i < nombres.length; i++) {
        if ((personas[nombres[i]]) >= 18) {
            console.log(nombres[i] + " es mayor de edad ");
        } else {
            console.log(nombres[i] + " es menor de edad ");
        }
    }
}
const people = {
    Maria: 20,
    Ana: 14,
    Luis: 16,
    Pepe: 35,
    Manuel: 50,
    Teresa: 12,
    Daniel: 27,
    Irene: 23,
    Alex: 10,
};
sonMayores(people);