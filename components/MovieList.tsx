import { List } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import React, { useEffect, useState } from "react";
import { Movie } from "../interfaces";
import { getMovies } from "../utils/api";
import MovieItem from "./MovieItem";
import SortMovies from "./SortMovies";

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState("");

  const onChangeSort = (event: RadioChangeEvent) => {
    setSort(event.target.value);
    getData(event.target.value, true);
  };

  const getData = async (sort: string = "", isClean: boolean = false) => {
    setIsLoading(true);
    let nextPage;
    if (!isClean) {
      nextPage = movies.length / 4 + 1;
    } else {
      nextPage = 1;
    }
    const [data, error] = await getMovies(nextPage, sort);

    const movieArray: Movie[] = data.map((v: any) => ({
      id: v.id,
      title: v.title,
      rating: v.rating,
      summary: v.summary,
      medium_cover_image: v.medium_cover_image,
      year: v.year,
    }));
    if (!isClean) {
      setMovies([...movies, ...movieArray]);
    } else {
      setMovies([...movieArray]);
    }
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
          if (sort === "") {
            getData();
          } else {
            getData(sort);
          }
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
      <SortMovies sort={sort} onChangeSort={onChangeSort} />
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
