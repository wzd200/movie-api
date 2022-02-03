import React, { useState } from "react";
import MovieConditions from "./Conditions/MovieConditions";
// import axios from "axios";

const MovieInfo = () => {
    let [movie, setMovie] = useState("");
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    
    const getMovieInfo = (e) => {
        var axios = require("axios").default;
        
        e.preventDefault()
        
        if (movie.length === 0) {
            return setError(true)
        }
        
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

            setResponseObj(response.data);
            setLoading(false)
        }).catch(function (error) {
            console.error(error);
            setError(true)
            setLoading(false)
        });
        
        // console.log(responseObj)
        
        // setError(false)
        // setResponseObj({})
        // setLoading(true)
    } 
    console.log(responseObj)
    
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
            <MovieConditions
                responseObj={responseObj}
                error={error}
                loading={loading}
            />
        </div>
    )
}

export default MovieInfo;
