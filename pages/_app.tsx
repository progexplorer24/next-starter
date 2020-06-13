import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { AppProps } from "next/app";

import MdxComponents from "@components/mdx-components";
import globalStyles from "../styles/global-styles";

export default ({ Component, pageProps }: AppProps): JSX.Element => (
  <MDXProvider components={MdxComponents}>
    {globalStyles}
    <Component {...pageProps} />
  </MDXProvider>
);
