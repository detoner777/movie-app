import React, { Fragment } from "react";
import styled from "styled-components";

import DataFetchHook from "../components/DataFetchHook";



import MovieCard from "../components/MovieCard";

const PopularMovies = () => {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  const [{ data, isLoading, isError }] = DataFetchHook(url);
  const movieCards = data.map(movie => (
    <MovieCard key={movie.id.toStrting()} movie={movie}></MovieCard>
  ));

  return (
    <Fragment>
      <p>Carently trending movies</p>
      {movieCards}
    </Fragment>
  );
};

export default PopularMovies;
