import React from "react";

import './MovieHeading.css';

function MovieHeading(props) {
    return <div className="col">
        <h1 id="heading">{props.heading}</h1>
    </div>
}

export default MovieHeading;