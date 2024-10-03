import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

function MovieGrid({ movies, toggleFavorite }) {
  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default MovieGrid;
