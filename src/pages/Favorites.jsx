import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByKeyWord } from 'service/moviesAPI';

const Favorites = () => {
  // const [movies, setMovies] = useState(null);
  // const [error, setError] = useState(null);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query');
  // const location = useLocation();
  // useEffect(() => {
  //   if (!query) return;

  //   const searchedMovies = async () => {
  //     try {
  //       const movieData = await getMovieByKeyWord(query);
  //       console.log('movieData: ', movieData);

  //       setMovies(movieData);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };
  //   searchedMovies();
  // }, [query]);

  // const hendleFormSubmit = event => {
  //   event.preventDefault();
  //   const movieInSearch = event.currentTarget.elements.movieTitle.value;

  //   setSearchParams({ query: movieInSearch });
  // };

  return;
};

export default Favorites;
