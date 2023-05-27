import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <p>
        Ooops, page not found. Please go to <Link to="/">homepage</Link>
      </p>
    </div>
  );
};
