import React from "react";
import styled from "styled-components";

const StyledError = styled.div`
    color: crimson;
`
const MovieConditions = (props) => {
    // if (props.responseObj.Response === "True") {
    //     const movieArray = props.responseObj.Search
    // }

    return (
        <div>
            {props.error && <StyledError>Please enter a valid movie title</StyledError>}
            {props.loading && <div>loading...</div>}
            {/* {props.responseObj.Response === "True" ?
                movieArray.forEach(movie => {
                    return <p>{movie.Title}</p>
                }) : null
            } */}
        </div>
    )
}

export default MovieConditions;