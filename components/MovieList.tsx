import React, { useEffect, useState } from "react";

import { CLICK_REFRESH, ERROR_MOVIES, NO_MOVIES } from "../common/messages";
import { BackTop, Button, List, message, Result, Space } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";

import { Movie } from "../interfaces";
import { getMovies } from "../utils/api";
import Title from "./Title";
import Filter from "./Filter";
import MovieItem from "./MovieItem";
import SortMovies from "./SortMovies";

const qualityList = ["All", "720p", "1080p", "2160p", "3D"];
const ratingList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

type Props = {
  movies: Movie[];
  error: string | null;
};

function MovieList(props: Props) {
  const [init, setInit] = useState(false);
  const [movies, setMovies] = useState<Movie[]>(props.movies);
  const [error, setError] = useState<string | null>(props.error);
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState("");
  const [quality, setQuality] = useState("All");
  const [minimumRating, setMinimumRating] = useState("0");

  const onChangeSort = (event: RadioChangeEvent) => {
    setSort(event.target.value);
  };

  const onChangeQuality = (value: string) => {
    setQuality(value);
  };

  const onChangeMinimumRating = (value: string) => {
    setMinimumRating(value);
  };

  const getData = async (isClean: boolean = false) => {
    setIsLoading(true);
    let nextPage;
    if (!isClean) {
      nextPage = movies.length / 4 + 1;
    } else {
      nextPage = 1;
    }
    const [data, error] = await getMovies(
      nextPage,
      sort,
      quality,
      minimumRating
    );

    if (data?.length > 0) {
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
    }
    if (!data || data.length === 0) {
      message.error(NO_MOVIES);
    }
    setError(error);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!init) {
      setInit(true);
    } else {
      getData(true);
    }
  }, [sort, quality, minimumRating]);

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

  if (error) {
    return (
      <Result
        status="error"
        title={ERROR_MOVIES}
        subTitle={CLICK_REFRESH}
        extra={[
          <Button type="primary" onClick={() => getData(true)}>
            새로 고침
          </Button>,
        ]}
      />
    );
  }

  return (
    <>
      <SortMovies sort={sort} onChangeSort={onChangeSort} />
      <Title title="필터" />
      <Space>
        <Filter
          title="품질"
          value={quality}
          onChange={onChangeQuality}
          options={qualityList}
        />
        <Filter
          title="평점"
          value={minimumRating}
          onChange={onChangeMinimumRating}
          options={ratingList}
        />
      </Space>
      <List
        dataSource={movies}
        renderItem={(movie, i) => (
          <List.Item key={`${i}_${movie.id}`}>
            <MovieItem movie={movie} />
          </List.Item>
        )}
        loading={isLoading}
      />
      <BackTop />
    </>
  );
}

export default MovieList;
