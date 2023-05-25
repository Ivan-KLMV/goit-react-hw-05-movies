import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTI1YzAwN2Q3NzBjMmI2YTk2YTY5NGEyYWIxOWRjZSIsInN1YiI6IjY0NmNkNTE4MmJjZjY3MDE1NTg0Y2I0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1zl0yET6waSnMi-_6LNcanZOg8qB1GH_Q87VGSPFtqc',
      },
    };
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`,
      options
    )
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        setMovies(response.results);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [page]);

  return isLoading ? (
    <>Loading...</>
  ) : (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          setPage(prev => prev + 1);
        }}
      >
        next
      </button>
    </div>
  );
};
