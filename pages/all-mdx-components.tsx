import React from "react";
import path from "path";
import { GetStaticProps, NextPage } from "next";
import Doc from "../mdx/all-components.mdx";
import returnCodeExamples from "./api/return-code-examples";

// const splitLines = (str: string): string[] => str.split(/\r?\n/);

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async () => {
  const hrPath = path.join(
    process.cwd(),
    "components",
    "atoms",
    "hr",
    "hr.tsx"
  );

  const examples = returnCodeExamples(hrPath);

  return {
    props: {
      examples,
    },
  };
};

type AllMdxProps = {
  code: string;
};

/**
|--------------------------------------------------
| You use this intetmediary component to pass props to your mdx file. 
|--------------------------------------------------
*/

const Component: NextPage<AllMdxProps> = (props) => {
  // console.log(props);
  return (<Doc {...props} />) as JSX.Element & AllMdxProps;
};

export default Component;
