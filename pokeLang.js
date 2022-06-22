async function getData(url) {
    const res = await fetch(url)

    const data = await res.json()



    return data
}




// getNameLang (obj, lang) recibe el objeto y un código de idioma y devuelve el nombre en el idioma.
// Si el código de idioma no coincide con los disponibles devuelve inglés (en).
// El objeto recibido debe poseer las estructuras obj.names[].name obj.names[].language.name
function getNameLang(obj, lang) {
    let en;
    for (let i = 0; i < obj.names.length; i++) {

        if (obj.names[i].language.name === lang) {
            return obj.names[i].name
        } else if (obj.names[i].language.name === "en") {
            en = obj.names[i].name
        }
    }
    return en
}
// getDexEntries (obj, lang) recibe el objeto y un código de idioma y devuelve un array con las entradas de pokedex en el idioma.
// Si el código de idioma no coincide con los disponibles devuelve inglés (en).
// El objeto recibido debe poseer las estructuras obj.flavor_text_entries[].flavor_text obj.flavor_text_entries[].language.name
function getDexEntries(obj, lang) {
    let enArr = new Array;
    let langArr = new Array;
    for (let i = 0; i < obj.flavor_text_entries.length; i++) {

        if (obj.flavor_text_entries[i].language.name === lang) {
            langArr.push(obj.flavor_text_entries[i].flavor_text)
        } else if (obj.flavor_text_entries[i].language.name === "en") {
            enArr.push(obj.flavor_text_entries[i].flavor_text)
        }
    }
    if (langArr.length < 0) {
        return langArr
    } else {
        return enArr
    }
}
async function getAllSpecies(string, lang) {
    string = string.toLowerCase();
    let pkmnArr = new Array;
    const allData = await getData("https://pokeapi.co/api/v2/pokemon-species/?limit=20000");
    for (let i = 0; i < allData.count; i++) {
        const pkmn = await getData(allData.results[i].url);
        if (getNameLang(pkmn, lang).toLowerCase().includes(string)) {
            pkmnArr.push(pkmn)
        }
    }
    return pkmnArr
}



getData("https://pokeapi.co/api/v2/pokemon-species/ditto").then(info => console.log(getNameLang(info, "fr")));


getAllSpecies("cha", "en").then(info => console.log(info))