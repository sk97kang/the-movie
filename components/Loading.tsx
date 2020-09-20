import React from "react";

import styled from "styled-components";
import { Spin } from "antd";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Loading() {
  return (
    <Container>
      <Spin size="large" />
    </Container>
  );
}

export default Loading;
