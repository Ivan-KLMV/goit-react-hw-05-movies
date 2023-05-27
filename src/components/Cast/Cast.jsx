import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackdropPhoto, CastStyled } from './Cast.styled';

export const Cast = () => {
  const URL = 'https://image.tmdb.org/t/p/w500';
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTI1YzAwN2Q3NzBjMmI2YTk2YTY5NGEyYWIxOWRjZSIsInN1YiI6IjY0NmNkNTE4MmJjZjY3MDE1NTg0Y2I0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1zl0yET6waSnMi-_6LNcanZOg8qB1GH_Q87VGSPFtqc',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        setCast(response.cast);
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <CastStyled>
      {cast.slice(0, 20).map(actor => (
        <li key={actor.id}>
          {actor.profile_path ? (
            <img src={`${URL}${actor.profile_path}`} alt="" />
          ) : (
            <BackdropPhoto>
              <p>no photo</p>
            </BackdropPhoto>
          )}
          <p>{actor.name}</p>
          <p>charcter: {actor.character}</p>
        </li>
      ))}
    </CastStyled>
  );
};
