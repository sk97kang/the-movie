import axios from "axios";

const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = "list_movies.json";
const MOVIE_DETAILS_URL = "movie_details.json";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export const getMovies = async (
  page = 1,
  limit: number = 4,
  rating: number = 0
) => {
  try {
    const {
      data: {
        data: { movies },
      },
    } = await api(LIST_MOVIES_URL, {
      params: {
        limit,
        minimum_rating: rating,
        page,
      },
    });
    return [movies, null];
  } catch (error) {
    return [[], error];
  }
};

export const getMovie = async (id: number) => {
  const {
    data: {
      data: { movie },
    },
  } = await api(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};
