import { useEffect } from 'react';
import { useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useLocation } from 'react-router-dom';
import { ContainerStyled } from 'components/Container.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // const showButton = totalPages > 1 && page !== totalPages;
  const location = useLocation();

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
        // setTotalPages(response.total_pages);
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
