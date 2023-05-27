import { Link } from 'react-router-dom';

export const MoviesList = ({ movies, path }) => {
  // console.log('reserv', reserv);
  // const backwardPath = path.state?.from ?? reserv;
  // console.log('backwardPath', backwardPath);
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: path }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
