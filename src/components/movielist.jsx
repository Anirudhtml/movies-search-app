import React from "react";
import './movielist.css';

function MoviesList(props) {

    const FavComponent = props.addFav;

  return (
    <div className="container">
      <div className="row flex-nowrap overflow-auto">
        {props.movies.map((movie, index) => (
          <div className="col" key={index}>
            <div className="img-container">
              <img id="images" src={movie.Poster} alt={movie.Title} />
              <div className="overlay">
                <div onClick={()=> props.handleFavMovies(movie)} className="overlay-text"><FavComponent /></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
