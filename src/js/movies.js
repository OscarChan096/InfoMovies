// api key  from TMDB
const api_key = "api_key=5f633841a9fdd684a028b2f38006f591";
// base url of the site
const base_url = "https://api.themoviedb.org/3";
// img url
const img_url = "https://image.tmdb.org/t/p/original";
// ACTORES
var arr_cast_global = [];
// requests for movies data
const requests = {
    fetchTrending: `${base_url}/trending/all/week?${api_key}&language=en-US`,
    fetchActionMovies: `${base_url}/discover/movie?${api_key}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api_key}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api_key}&with_genres=27`,
};
// used to truncate the string
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

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
        title.innerText = "Top Rated";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);
        data.results.forEach((movie, index) => {
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

// obtains information about the movies/series and displays them in the modal window
function getInfo(movieID) {
    const fila = document.querySelector(".contenedor-carousel");
    const flechaIzquierda = document.getElementById("flecha-izquierda");
    const flechaDerecha = document.getElementById("flecha-derecha");

    fetch(`${base_url}/movie/${movieID}?${api}`)
        .then((res) => res.json())
        .then((data) => {

            fetch(`${base_url}/movie/${movieID}/credits?${api}&language=en-US`)
                .then((res) => res.json())
                .then((dataCast) => {

                    // Array that will store a limited number of elements of the cast object.
                    let arr_cast = [];
                    let castSize = dataCast.cast.length;
                    for (let j = 0; j < castSize && j < 10; j++) {
                        var castName = dataCast.cast[j].name;
                        arr_cast.push(castName);
                    }

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

                    // CONDITION - ASSIGN COLOR ACCORDING TO QUALIFICATION
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
    // carousel buttons -------------------------------------------

    // ? ----- ----- Event Listener right arrow. ----- -----
    flechaDerecha.addEventListener("click", () => {
        fila.scrollLeft += fila.offsetWidth;
    });

    // ? ----- ----- Event Listener left arrow. ----- -----
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
