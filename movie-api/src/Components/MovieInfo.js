import React, { useState } from "react";
// import axios from "axios";

const MovieInfo = () => {
    let [movie, setMovie] = useState("");
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    const getMovieInfo = (e) => {
        var axios = require("axios").default;

        var options = {
        method: 'GET',
        url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        params: {s: movie, r: 'json', page: '1'},
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

        e.preventDefault()
    } 

    return (
        <div>
            <h2>Movie App</h2>
            <form onSubmit={getMovieInfo}>
                <input 
                    type="text"
                    onChange={(e) => setMovie(e.target.value)}
                    value={movie}
                    placeholder="Enter Movie Name"
                    />
                
                <button>Get Movie</button>
            </form>
        </div>
    )
}

export default MovieInfo;
