import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieList from "./components/MovieList/MovieList";
import FavoritesList from "./components/FavoritesList/FavoritesList";
import "./App.css";
import styles from "./App.module.css";

const API_KEY = "65594fcb"; // Replace with your own OMDB API key

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const searchMovies = async (searchTerm) => {
    if (searchTerm.trim() === "") {
      setMovies([]); // Clear results if search term is empty
      return;
    }

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const toggleFavorite = (movie) => {
    const index = favorites.findIndex((fav) => fav.imdbID === movie.imdbID);
    if (index === -1) {
      setFavorites([...favorites, movie]);
    } else {
      setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
    }
  };

  return (
    <div className={styles.container}>
      <h1>Movie Search App</h1>
      <SearchBar onSearch={searchMovies} />
      <h2>Search Results</h2>
      <MovieList movies={movies} toggleFavorite={toggleFavorite} />
      <h2>Favorites</h2>
      <FavoritesList favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;
