import React from "react";
import { Movie } from "../interfaces";

import styled from "styled-components";
import Link from "next/link";
import Title from "./Title";
import Rating from "./Rating";
import Year from "./Year";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Poster = styled.img``;

const Content = styled.div`
  width: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const Summary = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const More = styled.a`
  margin-left: auto;
  margin-top: auto;
  font-size: 16px;
  color: #6bc8ff;
  text-decoration: underline;
`;

type Props = {
  movie: Movie;
};

function MovieItem({ movie }: Props) {
  return (
    <Container>
      <Poster src={movie.medium_cover_image} />
      <Content>
        <TopContent>
          <Title title={movie.title} />
          <Rating disabled value={movie.rating} />
        </TopContent>
        <Year text={movie.year} />
        <Summary>{movie.summary}</Summary>
        <Link href={`movie/[id]`} as={`movie/${movie.id}`}>
          <More>자세히 보기</More>
        </Link>
      </Content>
    </Container>
  );
}

export default MovieItem;
