import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import MovieDetailComp from "../../components/MovieDetail";
import { MovieDetail } from "../../interfaces";
import { getMovie } from "../../utils/api";

type Props = {
  movie: MovieDetail;
  error: string | null;
};

function MoviePage({ movie, error }: Props) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      {id && <MovieDetailComp id={Number(id)} movie={movie} error={error} />}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [data, error] = await getMovie(Number(context.params?.id));

  const movie: MovieDetail | null = data
    ? {
        id: data.id,
        rating: data.rating,
        large_cover_image: data.large_cover_image,
        title_long: data.title_long,
        like_count: data.like_count,
        download_count: data.download_count,
        description_full: data.description_full,
      }
    : null;

  return { props: { movie, error } };
};

export default MoviePage;
