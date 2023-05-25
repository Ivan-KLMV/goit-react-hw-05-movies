import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  // 634649
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

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
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
      options
    )
      .then(response => {
        if (!response.ok) {
          return { results: [] };
        }
        // console.log(response);
        return response.json();
      })
      .then(response => {
        // console.log(response);
        setReviews(response.results);
      })
      .catch(err => console.error('this is error', err));
  }, [id]);

  //   console.log(reviews);
  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h4>author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
