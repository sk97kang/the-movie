import { GetStaticProps } from "next";
import Layout from "../components/Layout";

function IndexPage() {
  return <Layout>Index</Layout>;
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default IndexPage;
