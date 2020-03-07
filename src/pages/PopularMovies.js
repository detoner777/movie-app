import React, { Fragment } from "react";
import styled from "styled-components";

import DataFetchHook from "../services/DataFetchHook";
import Navigation from "../components/navigation/Navigation";
import MovieCard from "../components/MovieCard";

const MovieContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin 1vw 1vw;
`;

const PageText = styled.h1`
  font-size: 1.5em;
  margin: 1.5em 1em 0.75em 1em;
  color: #7ca579;
`;

const PopularMovies = () => {
  const API_KEY = process.env.APP_TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  const [{ data, isLoading, isError }] = DataFetchHook(url);
  const movieCards = data.map(movie => (
    <MovieCard key={movie.id.toStrting()} movie={movie}></MovieCard>
  ));
  console.log();
  return (
    <Fragment>
      <Navigation />
      <PageText>Currently trending movies.</PageText>
      {isError && <div> Something goes wrong, please try again</div>}
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        <MovieContainer>{movieCards}</MovieContainer>
      )}
    </Fragment>
  );
};

export default PopularMovies;
