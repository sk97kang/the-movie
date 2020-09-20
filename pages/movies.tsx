import { GetServerSideProps } from "next";

import { Movie } from "../interfaces";
import { getMovies } from "../utils/api";
import Layout from "../components/Layout";
import MovieList from "../components/MovieList";

type Props = {
  movies: Movie[];
  error: string | null;
};

function MoviesPage({ movies, error }: Props) {
  return (
    <Layout>
      <MovieList movies={movies} error={error} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [data, error] = await getMovies();

  const movies: Movie[] = data.map((v: any) => ({
    id: v.id,
    title: v.title,
    rating: v.rating,
    summary: v.summary,
    medium_cover_image: v.medium_cover_image,
    year: v.year,
  }));

  return { props: { movies, error } };
};

export default MoviesPage;
