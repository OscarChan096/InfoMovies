// api key  from TMDB
const api = "api_key=5f633841a9fdd684a028b2f38006f591";
// base url of the site
const base_url = "https://api.themoviedb.org/3";
// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;
// img url
const img_url = "https://image.tmdb.org/t/p/original";
// ACTORES
var arr_cast_global = [];
// requests for movies data
const requests = {
    fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=27`,
};
// used to truncate the string
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// Movies
let movies = [];

// top rated
fetch(requests.fetchTrending)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Mejor Puntuadas";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        //Funcion para limitar el numero de peliculas a 15 dentro de carrousel
        data.results.forEach((movie, index) => {
            //console.log(movie);
            if (index < 15) {
                const movie_card = document.createElement("div");
                movie_card.className = "row__posterLarge";
                const { poster_path, id } = movie;
                const body_card = document.createElement("div");
                body_card.classList.add("movie");

                body_card.innerHTML = `
                                        <img src=${img_url + poster_path}>
                                        <div class="overview">
                                        <button type="button" class="know-more" onclick="getInfo(${id})" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                        </div>
                `;
                movie_card.appendChild(body_card);
                row_posters.appendChild(movie_card);
            }
        });
    });

// action
fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Action Movies";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);
        data.results.forEach((movie, index) => {
            //console.log(movie);
            if (index < 15) {
                const movie_card = document.createElement("div");
                movie_card.className = "row__poster";
                const { backdrop_path, id } = movie;
                const body_card = document.createElement("div");
                body_card.classList.add("movieGenres");

                body_card.innerHTML = `
                                        <img src=${img_url + backdrop_path}>
                                        <div class="overviewGenres">
                                        <button type="button" class="know-moreGenres" onclick="getInfo(${id})" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                        </div>
                `;
                movie_card.appendChild(body_card);
                row_posters.appendChild(movie_card);
            }
        });
    });

// comedy
fetch(requests.fetchComedyMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Comedy Movies";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);
        data.results.forEach((movie, index) => {
            //console.log(movie);
            if (index < 15) {
                const movie_card = document.createElement("div");
                movie_card.className = "row__poster";
                const { backdrop_path, id } = movie;
                const body_card = document.createElement("div");
                body_card.classList.add("movieGenres");

                body_card.innerHTML = `
                                        <img src=${img_url + backdrop_path}>
                                        <div class="overviewGenres">
                                        <button type="button" class="know-moreGenres" onclick="getInfo(${id})" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                        </div>
                `;
                movie_card.appendChild(body_card);
                row_posters.appendChild(movie_card);
            }
        });
    });
// Horror
fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Horror Movies";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);
        data.results.forEach((movie, index) => {
            //console.log(movie);
            if (index < 15) {
                const movie_card = document.createElement("div");
                movie_card.className = "row__poster";
                const { backdrop_path, id } = movie;
                const body_card = document.createElement("div");
                body_card.classList.add("movieGenres");

                body_card.innerHTML = `
                                        <img src=${img_url + backdrop_path}>
                                        <div class="overviewGenres">
                                        <button type="button" class="know-moreGenres" onclick="getInfo(${id})" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                        </div>
                `;
                movie_card.appendChild(body_card);
                row_posters.appendChild(movie_card);
            }
        });
    });

// Funcion para obtener los datos de cada pelicula y mostrarlos en el elemento Modal
function getInfo(movieID) {
    const fila = document.querySelector(".contenedor-carousel");
    const flechaIzquierda = document.getElementById("flecha-izquierda");
    const flechaDerecha = document.getElementById("flecha-derecha");
    // console.log(fila.DOCUMENT_NODE);

    fetch(`${base_url}/movie/${movieID}?${api}`)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data);

            // Funcion para obtener el cast por ID de pelicula
            fetch(`${base_url}/movie/${movieID}/credits?${api}&language=en-US`)
                .then((res) => res.json())
                .then((dataCast) => {
                    //console.log(dataCast);

                    // Array que guardara un numero limitado de elementos del objeto cast
                    let arr_cast = [];
                    // Asignamos el tamaño del objeto cast en una variable para iterar
                    let castSize = dataCast.cast.length;
                    // Iteramos el objeto cast y creamos la condicional que agrega solo diez elementos del objeto original
                    for (let j = 0; j < castSize && j < 10; j++) {
                        var castName = dataCast.cast[j].name;
                        arr_cast.push(castName);
                    }

                    // Asignamos como valor el array limitado a diez elementos, en una nueva variable para poder asignarla dentro del DOM
                    // arr_cast_global = arr_cast.join(", ")
                    //console.log(arr_cast_global)

                    // ASIGNAR VARIABLES CON DATOS
                    let movieName = data.title;
                    let movieOriginalName = data.original_title;
                    let movieSinopsis = data.overview;
                    let imagenModal = data.poster_path;
                    let urlModal = `${img_url}${imagenModal}`;
                    let movieDate = data.release_date;
                    let voteAverage = data.vote_average;

                    let trailer = document.getElementById("youtube");
                    trailer.href = `https://www.youtube.com/results?search_query=${movieName}+trailer`;

                    let calificacion = document.getElementById(`movie_average`);
                    let average = document.getElementById(`average`);

                    // ASIGNAR VARIABLES (DATOS) EN HTML (DOM)
                    // document.getElementById(`movie_cast`).innerHTML = arr_cast_global;
                    document.getElementById(`movie_name`).innerHTML = movieName;
                    document.getElementById(`movie_original_name`).innerHTML =
                        movieOriginalName;
                    document.getElementById(`movie_sinopsis`).innerHTML = movieSinopsis;
                    document.getElementById(`movie_poster_modal`).src = urlModal;
                    document.getElementById(`movie_date`).innerHTML = movieDate;
                    document.getElementById(`movie_average`).innerHTML = voteAverage;

                    /* ------------------ CARRUSEL --------------------*/

                    let htmlContentToAppend = "";
                    dataCast.cast.forEach((cast, index) => {
                        if (index < 10) {
                            htmlContentToAppend += `
                    <a class="link_img" href="#">
                        <img class="pelicula" src="${img_url}${cast.profile_path}" alt="">
                        <p class="text">${cast.name}</p>
                    </a>
            `;
                        }
                    });
                    document.getElementById("carousel").innerHTML = htmlContentToAppend;
                    /*-------------------------------------------------*/

                    // CONDICION - ASIGNAR COLOR SEGUN CALIFICACION
                    if (voteAverage >= 8) {
                        calificacion.classList.remove("text-orange");
                        calificacion.classList.remove("text-red");
                        calificacion.classList.add("text-green");

                        average.classList.remove("border-orange");
                        average.classList.remove("border-red");
                        average.classList.add("border-green");
                    } else if (voteAverage >= 6) {
                        calificacion.classList.remove("text-green");
                        calificacion.classList.remove("text-red");
                        calificacion.classList.add("text-orange");

                        average.classList.remove("border-green");
                        average.classList.remove("border-red");
                        average.classList.add("border-orange");
                    } else {
                        calificacion.classList.remove("text-green");
                        calificacion.classList.remove("text-orange");
                        calificacion.classList.add("text-red");

                        average.classList.remove("border-green");
                        average.classList.remove("border-orange");
                        average.classList.add("border-red");
                    }
                });
        });
    // botones del carrusel -------------------------------------------

    // ? ----- ----- Event Listener para la flecha derecha. ----- -----
    flechaDerecha.addEventListener("click", () => {
        fila.scrollLeft += fila.offsetWidth;
    });

    // ? ----- ----- Event Listener para la flecha izquierda. ----- -----
    flechaIzquierda.addEventListener("click", () => {
        fila.scrollLeft -= fila.offsetWidth;
    });
    // ----------------------------------------------------------------
}

function pressSearch(event) {
    if (event.key == "Enter") {
        let title = document.getElementById("search").value;
        const alert = document.getElementById("alert");
        const textAlert = document.getElementById("text_alert");
        if (movies.includes(title)) {
            alert.style.backgroundColor = "#009900";
            textAlert.innerText = "EXITO: la pelicula se encuentra en el catalogo";
        } else {
            alert.style.backgroundColor = "#8E1900";
            textAlert.innerText = "ERROR: no se encontro la pelicula en el catalogo";
        }

        setTimeout(function () {
            alert.style.backgroundColor = "#11181e";
            textAlert.innerText = "";
        }, 2300);
    }
}

function buscar() {
    const title = document.getElementById("search").value;
    const alert = document.getElementById("alert");
    const textAlert = document.getElementById("text_alert");
    if (movies.includes(title)) {
        alert.style.backgroundColor = "#009900";
        textAlert.innerText = "EXITO: la pelicula se encuentra en el catalogo";
    } else {
        alert.style.backgroundColor = "#8E1900";
        textAlert.innerText = "ERROR: no se encontro la pelicula en el catalogo";
    }

    setTimeout(function () {
        alert.style.backgroundColor = "#11181e";
        textAlert.innerText = "";
    }, 2300);
}
