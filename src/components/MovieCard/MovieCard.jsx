import React from "react";
import styles from "./MovieCard.module.css";

function MovieCard({ movie, toggleFavorite }) {
  const { Poster, Title, Year, imdbID } = movie;
  const isFavorite =
    localStorage.getItem("favorites")?.includes(imdbID) || false;

  return (
    <div className={styles.movieCard}>
      <img
        src={
          Poster !== "N/A"
            ? Poster
            : "https://via.placeholder.com/300x450.png?text=No+Poster"
        }
        alt={Title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h3>{Title}</h3>
        <p>{Year}</p>
        <button
          className={`${styles.favoriteBtn} ${
            isFavorite ? styles.favorited : ""
          }`}
          onClick={() => toggleFavorite(movie)}
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
