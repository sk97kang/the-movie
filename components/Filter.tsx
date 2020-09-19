import React from "react";

import styled from "styled-components";
import { Select } from "antd";
import SubTitle from "./SubTitle";

const { Option } = Select;

const Container = styled.div`
  width: 100px;
  margin-bottom: 20px;

  & > div {
    width: 100%;
  }
`;

type Props = {
  title: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

function Filter({ title, value, onChange, options }: Props) {
  return (
    <Container>
      <SubTitle text={title} />
      <Select value={value} onChange={onChange}>
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </Container>
  );
}

export default Filter;
