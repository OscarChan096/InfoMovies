import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ScrollingCarousel } from '@trendyol-js/react-carousel'
import Item from './Item'

const Dashboard = () => {

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

    const [movieTrending, setMovietrending] = useState([]);

    useEffect(() => {
        axios.get(requests.fetchTrending)
            .then(({data}) => setMovietrending(data.results))
            .catch((error) => console.log(error));
    })

    return (
        <>
            <h2>HOLA MUNDO</h2>
            {/*<ScrollingCarousel>
                {movieTrending.map(({poster_path},index) => (
                    <Item key={index} poster={img_url + poster_path}/>
                ))}
            </ScrollingCarousel>*/}
        </>
    )
}

export default Dashboard;
