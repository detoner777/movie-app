import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UpcomingMovies from "./pages/UpcomingMovies";
import PopularMovies from "./pages/PopularMovies";
import FavoritesMovies from "./pages/FavoritesMovies";
import FullMovie from "./pages/FullMovie";
import Store from "./Store";

function App() {
  return (
    <Store>
      <Router>
        <Route path="/" exact component={PopularMovies} />
        <Route path="/upcoming" component={UpcomingMovies} />
        <Route path="/favorites" component={FavoritesMovies} />
        <Route path="/fullmovie" component={FullMovie} />
      </Router>
    </Store>
  );
}

export default App;
