import { ContainerStyled } from 'components/Container.styled';
import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  useParams,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { MovieDetailsStyled, InformationStyled } from './MovieDetails.styled';
import { moviesApi } from 'services/moviesApi';

const MovieDetails = () => {
  const navigate = useNavigate();
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const backwardPath = location.state?.from ?? '/';
  const URL = moviesApi.imagUrl;

  useEffect(() => {
    setIsLoading(true);

    moviesApi
      .getDetails(id)
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

  return (
    <ContainerStyled $marginTop>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <MovieDetailsStyled>
            <button type="button" onClick={backHandler}>
              back
            </button>
            <div>
              <img src={`${URL}${movieInfo.poster_path}`} alt="" />
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
                <ul>
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
                  <Link to="cast" state={{ from: location.state?.from ?? '/' }}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    to="reviews"
                    state={{ from: location.state?.from ?? '/' }}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
              <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
              </Suspense>
            </InformationStyled>
          </MovieDetailsStyled>
        </>
      )}
    </ContainerStyled>
  );
};

export default MovieDetails;
