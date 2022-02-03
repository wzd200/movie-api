import React from "react";
import styled from "styled-components";

const StyledError = styled.div`
    color: crimson;
`
const MovieConditions = (props) => {

    // console.log(props.responseObj)

    return (
        <div>
            {/* {props.responseObj && <div><p>{props.responseObj.response}</p></div>} */}
            {/* <p>{props.responseObj.Search}</p> */}
            {props.error && <StyledError>Please enter a valid movie title</StyledError>}
            {props.loading && <div>loading...</div>}
            {/* {props.responseObj.Response === "True" ?
                <p>response worked</p>
                : <p>response didn't work</p>
        } */}
        </div>
    )
}

export default MovieConditions;