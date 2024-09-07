import { useEffect, useState } from "react";
import { API_KEY, axiosInstance } from "../lib/utils";
import { Movie } from "../lib/types";
import MovieCard from "../components/MovieCard";
import MainLayout from "../components/layouts/MainLayout";

const MoviePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (search) {
      axiosInstance
        .get(`search/movie?api_key=${API_KEY}&query=${search}`)
        .then((response) => setMovies(response.data.results));
      return;
    }
    axiosInstance
      .get(`movie/popular?api_key=${API_KEY}`)
      .then((response) => setMovies(response.data.results));
  }, [search]);

  return (
    <MainLayout>
      <div className="px-6 sm:px-12 lg:px-24">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="w-full px-4 py-3 bg-transparent border rounded-md outline-none border-primary-lavender"
          placeholder="Search movies..."
        />
        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={`Movie - ${movie.id}`} movie={movie} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MoviePage;
