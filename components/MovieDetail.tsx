import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MovieDetail } from "../interfaces";
import { getMovie } from "./api";

import styled from "styled-components";
import { Rate } from "antd";
import Loading from "./Loading";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Poster = styled.img`
  width: 30%;
`;

const Content = styled.div`
  margin-left: 20px;
  width: 70%;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Like = styled.div`
  margin-bottom: 5px;
`;

const Download = styled.div`
  margin-bottom: 20px;
`;

const Description = styled.div``;

const Rating = styled.div`
  min-width: 150px;
  margin-left: 10px;
`;

function MovieDetailComp() {
  const router = useRouter();
  const { id } = router.query;

  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const [data, error] = await getMovie(Number(id));

    const movieObj: MovieDetail = {
      id: data.id,
      rating: data.rating,
      large_cover_image: data.large_cover_image,
      title_long: data.title_long,
      like_count: data.like_count,
      download_count: data.download_count,
      description_full: data.description_full,
    };
    setMovie(movieObj);
    setError(error);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading || movie == null) {
    return <Loading />;
  }

  return (
    <Container>
      <Poster src={movie.large_cover_image} />
      <Content>
        <TopContent>
          <Title>{movie.title_long}</Title>
          <Rating>
            <Rate disabled value={movie.rating / 2} />
          </Rating>
        </TopContent>
        <Like>Like : {movie.like_count}</Like>
        <Download>Download : {movie.download_count}</Download>
        <Description>{movie.description_full}</Description>
      </Content>
    </Container>
  );
}

export default MovieDetailComp;
