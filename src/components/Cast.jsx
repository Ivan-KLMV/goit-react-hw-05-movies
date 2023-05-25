import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        console.log(response);
        setCast(response.cast);
      })
      .catch(err => console.error(err));
  }, [id]);

  //   console.log(cast);
  return (
    <ul>
      {cast.slice(0, 20).map(actor => (
        <li key={actor.id}>
          {/* <div
            style={{ width: '160px', height: '240px', background: 'lightgrey' }}
          ></div> */}
          <img
            src={`${URL}${actor.profile_path}`}
            alt=""
            style={{ width: '160px', height: 'auto', background: 'lightgrey' }}
          />
          <p>{actor.name}</p>
          <p>charcter: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};
