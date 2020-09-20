import type { AppProps /*, AppContext */ } from "next/app";
import GlobalStyle from "../styles/GlobalStyles";
import "../styles/font.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
