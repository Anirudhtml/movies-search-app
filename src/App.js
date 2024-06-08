import { useEffect, useState } from 'react';
import MoviesList from './components/movielist';
import MovieHeading from './components/MovieHeading';
import SearchBox from './components/Searchbox';
import AddFav from './components/AddFav';
import RemoveFav from './components/RemoveFav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=c4aec5cb`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFav = JSON.parse(localStorage.getItem('react-app-fav-movies')) || [];
    setFavMovies(movieFav);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-app-fav-movies', JSON.stringify(items));
  };

  const handleFavMovies = (movie) => {
    const newFavMovies = [...favMovies, movie];
    setFavMovies(newFavMovies);
  };

  const deleteFavMovies = (movie) => {
    const newFavMovies = favMovies.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavMovies(newFavMovies);
    saveToLocalStorage(newFavMovies);
  };

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <MoviesList handleFavMovies={handleFavMovies} movies={movies} addFav={AddFav} />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieHeading heading='Favourites' />
      </div>
      <div className='row'>
        <MoviesList handleFavMovies={deleteFavMovies} movies={favMovies} addFav={RemoveFav} />
      </div>
    </div>
  );
}

export default App;
