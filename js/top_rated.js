

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "5f633841a9fdd684a028b2f38006f591";
axios.get(
    `${BASE_URL}/movie/550?api_key=${API_KEY}`
).then((response) => {
    console.log('Peliculas')
    console.log(response)
}).catch((error) => {
    console.log(error)
});

async function getCharacter(characterID) {
    let personaje = await axios.get(
        `${BASE_URL}/person/${characterID}?api_key=${API_KEY}`
    );
    return personaje.data
}

async function awaitResponse() {
    let response = await getCharacter(45);
    console.log('Tu respuesta hola: ', response)
}

awaitResponse();


