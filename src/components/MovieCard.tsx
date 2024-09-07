import { FC } from "react";
import { Movie } from "../lib/types";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="flex flex-col items-center gap-3 px-2 py-3 border rounded-md sm:gap-6 border-primary-lavender">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Movie Image"
        className="w-20 sm:w-32"
      />
      <h3 className="text-sm font-medium sm:text-lg">{movie.title}</h3>
      <p className="text-xs text-center sm:text-sm text-primary-gray line-clamp-4">
        {movie.overview}
      </p>
    </div>
  );
};

export default MovieCard;
