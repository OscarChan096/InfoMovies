// api key  from TMDB
const api_key = "api_key=5f633841a9fdd684a028b2f38006f591";
// base url of the site
const base_url = "https://api.themoviedb.org/3";
// img url
const img_url = "https://image.tmdb.org/t/p/original";

const request = `${base_url}/discover/tv?${api_key}`;

fetch(request)
    .then(res => res.json())
    .then(data => {
        const headrow = document.getElementById("headrow");
        const title = document.createElement("h3");
        title.innerText = "SERIES";
        headrow.appendChild(title);
        const content = document.createElement("div");
        content.className = "content";
        headrow.appendChild(content);
        data.results.forEach((movie, index) => {
            if (index < 20) {
                const { poster_path, id } = movie;
                console.log(id);
                const body_card = document.createElement("div");
                body_card.classList.add("movie");
                body_card.innerHTML = `
                                        <img src=${img_url + poster_path}>
                                        <div class="overview">
                                        <button type="button" class="know-more" onclick="getInfo(${id})" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                        </div>
                `;
                content.appendChild(body_card);
            }
        });
    })

// obtains information about the movies/series and displays them in the modal window
function getInfo(movieID) {
    const fila = document.querySelector(".contenedor-carousel");
    const flechaIzquierda = document.getElementById("flecha-izquierda");
    const flechaDerecha = document.getElementById("flecha-derecha");

    fetch(`${base_url}/tv/${movieID}?${api_key}`)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data);

            fetch(`${base_url}/tv/${movieID}/credits?${api_key}&language=en-US`)
                .then((res) => res.json())
                .then((dataCast) => {

                    let arr_cast = [];
                    let castSize = dataCast.cast.length;
                    for (let j = 0; j < castSize && j < 10; j++) {
                        var castName = dataCast.cast[j].name;
                        arr_cast.push(castName);
                    }

                    let movieName = data.name;
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
                    document.getElementById(`movie_original_name`).innerHTML = movieOriginalName;
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

    // ? ----- ----- Event Listener right arrow ----- -----
    flechaDerecha.addEventListener("click", () => {
        fila.scrollLeft += fila.offsetWidth;
    });

    // ? ----- ----- Event Listener left arrow ----- -----
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