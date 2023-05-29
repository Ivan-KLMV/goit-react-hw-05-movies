import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ContainerStyled } from 'components/Container.styled';
import { moviesApi } from 'services/moviesApi';

const Movies = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useSearchParams();

  useEffect(() => {
    if (!searchQuery.get('query')) {
      return;
    }
    setIsLoading(true);

    moviesApi
      .getSerch(searchQuery, page)
      .then(response => {
        // console.log(response);
        setMovies(response.results);
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
    setPage(1);
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <ContainerStyled $marginTop>
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
      {isLoading ? (
        <>Loading...</>
      ) : (
        <ContainerStyled>
          <MoviesList movies={movies} path={location} />
        </ContainerStyled>
      )}
    </ContainerStyled>
  );
};

export default Movies;
