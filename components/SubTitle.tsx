import React from "react";

import styled from "styled-components";

const Container = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
  color: rgba(20, 20, 20, 0.7);
`;

type Props = {
  text: string;
};

function SubTitle({ text }: Props) {
  return <Container>{text}</Container>;
}

export default SubTitle;
