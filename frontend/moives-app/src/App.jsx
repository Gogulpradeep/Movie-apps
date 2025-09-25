import { useState, useEffect } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [editMovie, setEditMovie] = useState(null);

  // Fetch movies
  const fetchMovies = async () => {
    const res = await fetch("http://localhost:5000/api/movies");
    const data = await res.json();
    setMovies(data);
  };

  useEffect(() => { fetchMovies(); }, []);

  // Add movie
  const addMovie = async (movie) => {
    const res = await fetch("http://localhost:5000/api/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    });
    const newMovie = await res.json();
    setMovies([...movies, newMovie]);
  };

  // Update movie
  const updateMovie = async (movie) => {
    const res = await fetch(`http://localhost:5000/api/movies/${editMovie._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    });
    const updated = await res.json();
    setMovies(movies.map(m => m._id === updated._id ? updated : m));
    setEditMovie(null);
  };

  // Delete movie
  const deleteMovie = async (id) => {
    await fetch(`http://localhost:5000/api/movies/${id}`, { method: "DELETE" });
    setMovies(movies.filter(m => m._id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Movie Watchlist App</h1>
      <MovieForm
        onSubmit={editMovie ? updateMovie : addMovie}
        initialData={editMovie}
      />
      <MovieList
        movies={movies}
        onEdit={(movie) => setEditMovie(movie)}
        onDelete={deleteMovie}
      />
    </div>
  );
}

export default App;
