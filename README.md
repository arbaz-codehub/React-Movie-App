# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React Movie Search App

## Overview
The Movie Search App is a React-based application that utilizes the [OMDb API](https://www.omdbapi.com/) to allow users to search for movies. The app features a live search capability, enabling users to see results as they type in the search bar. Users can also save their favorite movies by clicking a like button, and their selections are stored in local storage, ensuring that favorites persist even if the browser is closed.

## Features
- **Live Movie Search**: 
  - As users type in the search bar, live search results are displayed instantly.

- **Favorite Movies**: 
  - Users can add movies to their favorites by clicking the like button.

- **Local Storage**: 
  - The app remembers users' favorite movies using local storage, allowing selections to persist between sessions.

- **Responsive Design**: 
  - The application is designed to be responsive, providing a seamless experience on both desktop and mobile devices.

## Tech Stack
- **Frontend**: React (JavaScript), CSS
- **API**: OMDb API

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/movie-search-app.git
2. Navigate to the project directory:
   ```bash
   cd movie-search-app
3. Install dependencies:
   ```bash
   npm install
4. Start the React app:
   ```bash
   npm install
5. Open the app in your browser at http://localhost:your-port

## Usage
1. Open the app to view the homepage with the search bar.
2. Start typing the name of a movie in the search bar to see live search results.
3. Click the like button next to a movie to add it to your favorites.
4. Your favorite movies will be stored in local storage and remain accessible even after closing the browser.

## Future Improvements
1. Implement a feature to remove movies from favorites.
2. Add user authentication for personalized experiences.
3. Enhance the UI with animations for better user engagement.

## Contributing
- Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License
- This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
- Special thanks to OMDb API for providing the movie data.

## Contact
- For any inquiries, please reach out to arbaz130803@example.com.
