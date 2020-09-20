import { GetStaticProps } from "next";

import { Divider, List } from "antd";

import Layout from "../components/Layout";
import Title from "../components/Title";

const dependencies = [
  "react : ^16.12.0",
  "react-dom : ^16.12.0",
  "next : ^9.5.3",
  "antd : ^4.6.4",
  "@ant-design/icon : ^4.2.2",
  "axios : ^0.20.0",
  "styled-components : ^5.2.0",
  "styled-reset : ^4.2.3",
  "typescript : 4.0.3",
];
const devDependencies = [
  "typescript : ^4.0.3",
  "babel-plugin-styled-components : ^1.11.1",
];

function IndexPage() {
  return (
    <Layout>
      <>
        <Title title="사용된 라이브러리 및 프레임 워크" />
        <Divider orientation="left">Dependencies</Divider>
        <List
          bordered
          dataSource={dependencies}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <Divider orientation="left">DevDependencies</Divider>
        <List
          bordered
          dataSource={devDependencies}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default IndexPage;
