import React, { useState } from "react";
// import axios from "axios";

const MovieInfo = () => {
    let [movie, setMovie] = useState("");
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    const getMovieInfo = () => {
        var axios = require("axios").default;

        var options = {
        method: 'GET',
        url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        params: {s: 'Avengers Endgame', r: 'json', page: '1'},
        headers: {
            'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
            'x-rapidapi-key': '2d262fbfa4msh92c2df0d1e87162p13d87bjsn82d2e6ce542e'
        }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    } 

    return (
        <div>
            <h2>Movie App</h2>
            <button onClick={getMovieInfo}>Get Movie</button>
        </div>
    )
}

export default MovieInfo;
