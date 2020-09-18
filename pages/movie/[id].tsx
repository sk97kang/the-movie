import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import MovieDetail from "../../components/MovieDetail";

function MoviePage() {
  const router = useRouter();
  const { id } = router.query;
  return <Layout>{id && <MovieDetail id={Number(id)} />}</Layout>;
}

export default MoviePage;
