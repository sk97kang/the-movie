import React from "react";

import styled from "styled-components";
import { Rate } from "antd";

const Container = styled.div`
  min-width: 150px;
  text-align: center;
`;

type Props = {
  disabled: boolean;
  value: number;
};

function Rating({ disabled, value }: Props) {
  return (
    <Container>
      <Rate disabled={disabled} value={value / 2} /> {` (${value})`}
    </Container>
  );
}

export default Rating;
