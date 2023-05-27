import { ContainerStyled } from 'components/Container.styled';
import { useEffect, useState } from 'react';
import {
  Link,
  useParams,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { MovieDetailsStyled, InformationStyled } from './MovieDetails.styled';

export const MovieDetails = () => {
  const navigate = useNavigate();
  const URL = 'https://image.tmdb.org/t/p/w500';
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const backwardPath = location.state?.from ?? '/';
  // console.log(backwardPath);

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
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        setMovieInfo(response);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  const backHandler = () => {
    navigate(backwardPath);
  };

  return isLoading ? (
    <>Loading...</>
  ) : (
    <ContainerStyled $marginTop>
      <MovieDetailsStyled>
        <button type="button" onClick={backHandler}>
          back
        </button>
        <div>
          <img
            src={`${URL}${movieInfo.poster_path}`}
            alt=""
            style={{
              width: '240px',
              height: 'auto',
              background: 'lightgrey',
              flexShrink: 0,
            }}
          />
          <div>
            <h2>
              {movieInfo.original_title}
              <span>
                {movieInfo.release_date &&
                  `(${movieInfo.release_date.slice(0, 4)})`}
              </span>
            </h2>
            <p>
              user score:
              <span>{`${Math.round(movieInfo.vote_average * 10)}%`}</span>
            </p>
            <h3>overview</h3>
            <p>{movieInfo.overview}</p>
            <h3>genres</h3>
            <ul style={{ display: 'flex', gap: '10px', listStyle: 'none' }}>
              {movieInfo.genres &&
                movieInfo.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
          </div>
        </div>
        <InformationStyled>
          <h3>additional information</h3>
          <ul>
            <li>
              <Link to="cast" state={{ from: location.state.from }}>
                cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location.state.from }}>
                reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </InformationStyled>
      </MovieDetailsStyled>
    </ContainerStyled>
  );
};
