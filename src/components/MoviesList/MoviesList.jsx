import { Link } from 'react-router-dom';

export const MoviesList = ({ movies, path }) => {
  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: path }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
