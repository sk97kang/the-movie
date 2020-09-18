import React from "react";

import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 10px;
  font-weight: 500;
`;

type Props = {
  text: string;
};

function Year({ text }: Props) {
  return <Container>제작년도 : {text}</Container>;
}

export default Year;
