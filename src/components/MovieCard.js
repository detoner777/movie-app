import React, { useContext, Fragment } from "react";

import styled from "styled-components";
// import { useMediaQuery } from "react-responsive";
import { navigate } from "@reach/router";

import { CTX } from "../components/Store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStopwatch } from "@fortawesome/free-solid-svg-icons";

const MovieCard = props => {
  const { dispatch } = useContext(CTX);

  const { poster_path, title, vote_average } = props.movie;
  const { runtime } = props.movie.details;

  const imageURL = `https://image.tmdb.org/t/p/w780${poster_path}`;

  function handleMovieClick() {
    dispatch({ type: "MOVIE_CLICKED", payload: props.movie });
    navigate(`/fullmovie/`, { myMovie: props.movie });
  }

  const convertRuntime = num => {
    let hourse = num / 60;
    let rhourse = Math.floor(hourse);
    let minutes = (hourse - rhourse) * 60;
    let rminutes = Math.round(minutes);
    return rhourse + "h " + rminutes + "m";
  };

  const convertedRuntime = convertRuntime(runtime);

  const showRuntime = () => {
    if (runtime !== 0) {
      return { convertedRuntime };
    }
  };

  const showRating = () => {
    if (vote_average !== 0) {
      return { vote_average };
    }
  };

  return (
    <Fragment>
      {" "}
      {showRuntime()}
      {showRating()}
    </Fragment>
  );
};

export default MovieCard;
