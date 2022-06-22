"use strict";

//Escribir una función que reciba un número
// Obtener la información de la casa que se corresponda con el número y a partir de ahí, sacar el NOMBRE de su lord.

//Puede haber errores:
///// Que lo introducido no sea un número
//// Que el número no se corresponda con ninguna casa
//// Que la casa no tenga lord actualmente


// Si ocurre un error, tenemos que gestionarlo



// Si el numero es 2 -> https://anapioficeandfire.com/api/houses/2

//Si el número es 233 -> https://anapioficeandfire.com/api/houses/233

async function getData(url) {
    try {
        const res = await fetch(url)

        const data = await res.json()
    } catch (e) {
        throw new Error("Failed URL")
    }

    return data
}
async function getLordName(houseID) {
    try {

        houseID = +houseID

        if (isNaN(houseID)) {
            throw new Error("El id dado no es un número");
        }
        if (houseID < 0) {
            throw new Error("Ah, un listillo");
        }
        try {
            const house = await getData("https://anapioficeandfire.com/api/houses/" + houseID);

        } catch {
            throw new Error("Esta casa no existe");
        }

        const { currentLord } = house;
        if (!currentLord) {
            throw new Error("Esta casa ya no tiene lord (SPOILERS)");
        }
        return currentLord.name;

    } catch (e) {
        console.error(e.message)
        alert(e.message)
    }
}
getLordName("0").then(info => console.log(info));