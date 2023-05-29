const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTI1YzAwN2Q3NzBjMmI2YTk2YTY5NGEyYWIxOWRjZSIsInN1YiI6IjY0NmNkNTE4MmJjZjY3MDE1NTg0Y2I0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1zl0yET6waSnMi-_6LNcanZOg8qB1GH_Q87VGSPFtqc',
  },
};

export const moviesApi = {
  imagUrl: 'https://image.tmdb.org/t/p/w500',

  getTrending(page) {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`,
      options
    ).then(response => response.json());
  },

  getSerch(searchQuery, page) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery.get(
        'query'
      )}&include_adult=false&language=en-US&page=${page}`,
      options
    ).then(response => response.json());
  },

  getDetails(id) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    ).then(response => response.json());
  },

  getCast(id) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    ).then(response => response.json());
  },

  getReviews(id) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
      options
    ).then(response => {
      if (!response.ok) {
        return { results: [] };
      }
      return response.json();
    });
  },
};
