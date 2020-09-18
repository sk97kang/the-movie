import React from "react";
import { Movie } from "../interfaces";

import styled from "styled-components";
import Link from "next/link";
import { Rate } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 10px;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Poster = styled.img``;

const Content = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Summary = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const Rating = styled.div`
  min-width: 150px;
  margin-left: 10px;
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
          <Title>{movie.title}</Title>
          <Rating>
            <Rate disabled value={movie.rating / 2} />
          </Rating>
        </TopContent>
        <Summary>{movie.summary}</Summary>
        <Link href={`movie/[id]`} as={`movie/${movie.id}`}>
          <More>자세히 보기</More>
        </Link>
      </Content>
    </Container>
  );
}

export default MovieItem;
