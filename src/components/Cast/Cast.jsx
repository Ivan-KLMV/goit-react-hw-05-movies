import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackdropPhoto, CastStyled } from './Cast.styled';
import { moviesApi } from 'services/moviesApi';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const URL = moviesApi.imagUrl;

  useEffect(() => {
    moviesApi
      .getCast(id)
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

export default Cast;
