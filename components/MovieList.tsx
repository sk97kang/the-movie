import { List } from "antd";
import React, { useEffect, useState } from "react";
import { Movie } from "../interfaces";
import { getMovies } from "../utils/api";
import MovieItem from "./MovieItem";

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const [data, error] = await getMovies(movies.length / 4 + 1);

    const movieArray: Movie[] = data.map((v: any) => ({
      id: v.id,
      title: v.title,
      rating: v.rating,
      summary: v.summary,
      medium_cover_image: v.medium_cover_image,
    }));
    setMovies([...movies, ...movieArray]);
    setError(error);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    function onScroll() {
      if (
        window.pageYOffset + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 50
      ) {
        if (!isLoading) {
          getData();
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isLoading]);

  return (
    <>
      <List
        dataSource={movies}
        renderItem={(movie) => (
          <List.Item key={movie.id}>
            <MovieItem movie={movie} />
          </List.Item>
        )}
        loading={isLoading}
      />
    </>
  );
}

export default MovieList;
