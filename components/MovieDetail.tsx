import React, { useState } from "react";
import Link from "next/link";

import styled from "styled-components";
import { Button, Result } from "antd";

import { MovieDetail } from "../interfaces";
import { getMovie } from "../utils/api";
import { CLICK_REFRESH, ERROR_MOVIES } from "../common/messages";
import Loading from "./Loading";
import Title from "./Title";
import Rating from "./Rating";

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
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

const Like = styled.div`
  margin-bottom: 5px;
`;

const Download = styled.div`
  margin-bottom: 20px;
`;

const Description = styled.div``;

const BackButton = styled.a`
  font-size: 16px;
  color: #6bc8ff;
  text-decoration: underline;
`;

type Props = {
  id: number;
  movie: MovieDetail;
  error: string | null;
};

function MovieDetailComp(props: Props) {
  const [movie, setMovie] = useState<MovieDetail | null>(props.movie);
  const [error, setError] = useState<string | null>(props.error);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const [data, error] = await getMovie(props.id);

    if (data) {
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
    }
    setError(error);
    setIsLoading(false);
  };

  if (isLoading || movie == null) {
    return <Loading />;
  }

  if (error) {
    return (
      <Result
        status="error"
        title={ERROR_MOVIES}
        subTitle={CLICK_REFRESH}
        extra={[
          <Button type="primary" onClick={() => getData()}>
            새로 고침
          </Button>,
        ]}
      />
    );
  }

  return (
    <>
      <Container>
        <Poster src={movie.large_cover_image} />
        <Content>
          <TopContent>
            <Title title={movie.title_long} />
            <Rating disabled value={movie.rating} />
          </TopContent>
          <Like>Like : {movie.like_count}</Like>
          <Download>Download : {movie.download_count}</Download>
          <Description>{movie.description_full}</Description>
        </Content>
      </Container>
      <Link href="/movies">
        <BackButton>리스트로 돌아가기</BackButton>
      </Link>
    </>
  );
}

export default MovieDetailComp;
