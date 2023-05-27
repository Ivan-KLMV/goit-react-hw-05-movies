import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList';
import { useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [input, setInput] = useState('');
  // const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useSearchParams();
  const showButton = totalPages > 1 && page !== totalPages;
  // console.log('Movies', location.pathname);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTI1YzAwN2Q3NzBjMmI2YTk2YTY5NGEyYWIxOWRjZSIsInN1YiI6IjY0NmNkNTE4MmJjZjY3MDE1NTg0Y2I0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1zl0yET6waSnMi-_6LNcanZOg8qB1GH_Q87VGSPFtqc',
      },
    };

    if (!searchQuery.get('query')) {
      return;
    }

    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery.get(
        'query'
      )}&include_adult=false&language=en-US&page=${page}`,
      options
    )
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        setMovies(response.results);
        setTotalPages(response.total_pages);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [page, searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();

    if (input.trim() === '') {
      alert('Enter a request');
      return;
    }
    setSearchQuery({ query: input });
    // setSearchValue(input);
    setPage(1);
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="input"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
              onChange={handleChange}
              value={input}
            />
            <button type="submit">
              <span>Search_</span>
            </button>
          </label>
        </form>
      </div>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <MoviesList movies={movies} path={location} />
          {showButton && (
            <button
              type="button"
              onClick={() => {
                setPage(prev => prev + 1);
              }}
            >
              next
            </button>
          )}
        </>
      )}
    </>
  );
};
