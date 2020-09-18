import React from "react";

import styled from "styled-components";

const Container = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 20px;
`;

type Props = {
  title: string;
};

function Title({ title }: Props) {
  return <Container>{title}</Container>;
}

export default Title;
