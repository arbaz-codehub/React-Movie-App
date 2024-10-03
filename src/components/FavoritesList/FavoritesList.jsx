import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./FavoritesList.module.css";

function Favorites({ favorites, toggleFavorite }) {
  return (
    <div className={styles.grid}>
      {favorites.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default Favorites;
