import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

import styled from "styled-components";
import { Col, Menu, Row } from "antd";

const Content = styled(Col)`
  padding: 30px 10px;
`;

const Footer = styled.footer`
  height: 50px;
`;

type Props = {
  title: string;
  children?: ReactNode;
};

const Layout = ({ children, title = "THE MOVIE" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
    </Head>
    <Menu mode="horizontal" theme="dark">
      <Menu.Item>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/movies">
          <a>Movies</a>
        </Link>
      </Menu.Item>
    </Menu>
    <Row gutter={8}>
      <Col xs={1} md={2} lg={4}></Col>
      <Content xs={22} md={20} lg={16}>
        {children}
      </Content>
      <Col xs={1} md={2} lg={4}></Col>
    </Row>
    <Footer>
      <hr />
      <span>The Movie</span>
    </Footer>
  </>
);

export default Layout;
