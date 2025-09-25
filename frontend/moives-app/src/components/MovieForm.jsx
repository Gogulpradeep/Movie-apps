import { useState } from "react";

function MovieForm({ onSubmit, initialData }) {
  const [form, setForm] = useState(initialData || { movieTitle: "", description: "", releaseYear: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ movieTitle: "", description: "", releaseYear: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="movieTitle" placeholder="Title" value={form.movieTitle} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
      <input name="releaseYear" type="number" placeholder="Year" value={form.releaseYear} onChange={handleChange} required />
      <button type="submit">{initialData ? "Update" : "Add"} Movie</button>
    </form>
  );
}

export default MovieForm;
