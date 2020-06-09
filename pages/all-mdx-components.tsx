import React, { FC } from "react";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import Doc from "../mdx/all-components.mdx";

const splitLines = (str: string): string[] => str.split(/\r?\n/);

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async () => {
  const localPath = path.join(process.cwd(), "components", "hr.tsx");
  const fileContent = fs.readFileSync(localPath, "utf8");
  const codeLines = splitLines(fileContent);
  return {
    props: {
      text: "hello",
      codeLines,
    },
  };
};

type AllMdxProps = {
  text: string;
};

/**
|--------------------------------------------------
| You use this intetmediary component to pass props to your mdx file. 
|--------------------------------------------------
*/

const Component: FC<AllMdxProps> = (props) => {
  // console.log(props);
  return (<Doc {...props} />) as JSX.Element & AllMdxProps;
};

export default Component;
