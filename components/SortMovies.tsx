import React from "react";

import styled from "styled-components";
import { Radio } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";

import Title from "./Title";

const Container = styled.div`
  margin-bottom: 30px;
`;

type Props = {
  sort: string;
  onChangeSort: (event: RadioChangeEvent) => void;
};

function SortMovies({ sort, onChangeSort }: Props) {
  return (
    <Container>
      <Title title={"정렬하기"} />
      <Radio.Group value={sort} onChange={onChangeSort}>
        <Radio.Button value="">전체</Radio.Button>
        <Radio.Button value="title">제목</Radio.Button>
        <Radio.Button value="year">제작년도</Radio.Button>
        <Radio.Button value="rating">평점</Radio.Button>
      </Radio.Group>
    </Container>
  );
}

export default SortMovies;
