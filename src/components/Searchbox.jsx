import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './Searchbox.css';

function SearchBox(props) {

    function handleChange(event) {
        props.setSearchValue(event.target.value)
    }

    return <input onChange={handleChange} value={props.searchValue} id="input-space" placeholder="    Search movies..."></input>
}

export default SearchBox;