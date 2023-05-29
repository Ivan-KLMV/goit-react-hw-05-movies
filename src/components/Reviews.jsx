import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesApi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const [totalResults, setTotalResults] = useState(1);

  useEffect(() => {
    moviesApi
      .getReviews(id)
      .then(response => {
        // console.log(response);
        setReviews(response.results);
        setTotalResults(response.total_results);
      })
      .catch(err => console.error('this is error', err));
  }, [id]);

  return (
    <div>
      {totalResults > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movies</p>
      )}
    </div>
  );
};

export default Reviews;
