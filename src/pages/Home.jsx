import { useEffect } from 'react';
import { useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useLocation } from 'react-router-dom';
import { ContainerStyled } from 'components/Container.styled';
import { moviesApi } from 'services/moviesApi';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page] = useState(1);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    moviesApi
      .getTrending(page)
      .then(response => {
        // console.log(response);
        setMovies(response.results);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [page]);

  return (
    <ContainerStyled>
      <h1>Trending today</h1>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <MoviesList movies={movies} path={location} />
      )}
    </ContainerStyled>
  );
};

export default Home;
