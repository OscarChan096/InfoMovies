// api key  from TMDB 
const api = "api_key=5f633841a9fdd684a028b2f38006f591";
// base url of the site 
const base_url = "https://api.themoviedb.org/3";
// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;
// img url 
const img_url = "https://image.tmdb.org/t/p/original";

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
        data.results.forEach((movie, index) => {
            //console.log(movie);
            if (index < 15) {
                const poster = document.createElement("img");
                poster.className = "row__posterLarge";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);
                let mov = movie.title != null ? movie.title:movie.name;
                movies.push(mov);
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
                const poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_posters.appendChild(poster);
                let mov = movie.title != null ? movie.title:movie.name;
                movies.push(mov);
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
            const poster = document.createElement("img");
            poster.className = "row__poster";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
            let mov = movie.title != null ? movie.title:movie.name;
            movies.push(mov);
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
            const poster = document.createElement("img");
            poster.className = "row__poster";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
            let mov = movie.title != null ? movie.title:movie.name;
            movies.push(mov);
        }
    });
});

    

function pressSearch(event) {
    if (event.key == 'Enter') {
        let title = document.getElementById('search').value;
        const alert = document.getElementById('alert');
        const textAlert = document.getElementById('text_alert');
        if (movies.includes(title)) {
            alert.style.backgroundColor = '#009900';
            textAlert.innerText = 'EXITO: la pelicula se encuentra en el catalogo';
        } else {
            alert.style.backgroundColor = '#8E1900';
            textAlert.innerText = 'ERROR: no se encontro la pelicula en el catalogo';
        }
    
        setTimeout(function () {
            alert.style.backgroundColor = '#11181e';
            textAlert.innerText = '';
        }, 2300);
    }
}

function buscar() {
    const title = document.getElementById('search').value;
    const alert = document.getElementById('alert');
    const textAlert = document.getElementById('text_alert');
    if (movies.includes(title)) {
        alert.style.backgroundColor = '#009900';
        textAlert.innerText = 'EXITO: la pelicula se encuentra en el catalogo';
    } else {
        alert.style.backgroundColor = '#8E1900';
        textAlert.innerText = 'ERROR: no se encontro la pelicula en el catalogo';
    }

    setTimeout(function () {
        alert.style.backgroundColor = '#11181e';
        textAlert.innerText = '';
    }, 2300);

}
