function MovieList({ movies, onEdit, onDelete }) {
  return (
    <table border="1" style={{ marginTop: 20, width: "100%" }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr key={movie._id}>
            <td>{movie.movieTitle}</td>
            <td>{movie.description}</td>
            <td>{movie.releaseYear}</td>
            <td>
              <button onClick={() => onEdit(movie)}>Edit</button>
              <button onClick={() => onDelete(movie._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MovieList;
