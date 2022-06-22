// # Ejercicio 5

// Edita el archivo script.js para crear una función que reciba una array de objetos (equipos y puntos conseguidos) y muestre por consola el ** nombre ** del que más y del que menos puntos hayn conseguido, con sus respectivos ** totales **.

// Encontrarás un array de ejemplo en el propio documento.
"use strict";

function sumaPuntos(puntuacion) {
    let totales = 0;
    for (let i = 0; i < puntuacion.length; i++) {
        totales = totales + puntuacion[i];
    }
    return totales;
}

function puntosEquipo(equipo) {
    return sumaPuntos(equipo["puntos"])
}

function topBottom(liga) {
    let equipoTop = liga[0];
    let equipoBot = liga[0];
    for (let i = 0; i < liga.length; i++) {
        let equipo = liga[i]
        if (puntosEquipo(equipoTop) < puntosEquipo(equipo)) {
            equipoTop = equipo;
        } else if (puntosEquipo(equipoBot) > puntosEquipo(equipo)) {
            equipoBot = equipo;
        }
    }
    console.log("El mejor equipo ha sido " + equipoTop["equipo"] + " con " + puntosEquipo(equipoTop));
    console.log("El peor equipo ha sido " + equipoBot["equipo"] + " con " + puntosEquipo(equipoBot));

}

// puntuaciones
const puntuaciones = [{
        equipo: "Toros Negros",
        puntos: [1, 3, 4, 2, 10, 8],
    },
    {
        equipo: "Amanecer Dorado",
        puntos: [8, 5, 2, 4, 7, 5, 3],
    },
    {
        equipo: "Águilas Plateadas",
        puntos: [5, 8, 3, 2, 5, 3],
    },
    {
        equipo: "Leones Carmesí",
        puntos: [5, 4, 3, 1, 2, 3, 4],
    },
    {
        equipo: "Rosas Azules",
        puntos: [2, 1, 3, 1, 4, 3, 4],
    },
    {
        equipo: "Mantis Verdes",
        puntos: [1, 4, 5, 1, 3],
    },
    {
        equipo: "Ciervos Celestes",
        puntos: [3, 5, 1, 1],
    },
    {
        equipo: "Pavos Reales Coral",
        puntos: [2, 3, 2, 1, 4, 3],
    },
    {
        equipo: "Orcas Moradas",
        puntos: [2, 3, 3, 4],
    },
];
topBottom(puntuaciones);