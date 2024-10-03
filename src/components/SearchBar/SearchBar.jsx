import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Trigger search on every input change
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        className={styles.searchInput}
        placeholder="Enter movie title..."
      />
      <button onClick={() => onSearch(searchTerm)} className={styles.searchBtn}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
