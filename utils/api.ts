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
  sort: string = "",
  quality: string = "All",
  minimumRating: string = "0",
  limit: number = 4
) => {
  try {
    const {
      data: {
        data: { movies },
      },
    } = await api(LIST_MOVIES_URL, {
      params: {
        limit,
        quality,
        minimum_rating: minimumRating,
        page,
        sort_by: sort,
      },
    });
    return [movies, null];
  } catch (error) {
    return [[], error];
  }
};

export const getMovie = async (id: number) => {
  try {
    const {
      data: {
        data: { movie },
      },
    } = await api(MOVIE_DETAILS_URL, {
      params: {
        movie_id: id,
      },
    });
    return [movie, null];
  } catch (error) {
    return [null, error];
  }
};
