import React from "react";
// import fs from "fs";
// import path from "path";
// import { GetStaticProps } from "next";
import { NextPage } from "next";
import Doc from "../mdx/font-weight.mdx";
import { defaultFontClasses } from "../data";

// const splitLines = (str: string): string[] => str.split(/\r?\n/);

// eslint-disable-next-line @typescript-eslint/require-await
// export const getStaticProps: GetStaticProps = async () => {
//   const localPath = path.join(process.cwd(), "components", "hr.tsx");
//   const fileContent = fs.readFileSync(localPath, "utf8");
//   const codeLines = splitLines(fileContent);
//   return {
//     props: {
//       text: "hello",
//       codeLines,
//     },
//   };
// };

type FontWeightProps = {
  specObj: typeof defaultFontClasses;
};

/**
|--------------------------------------------------
| You use this intetmediary component to pass props to your mdx file. 
|--------------------------------------------------
*/

const FontWeight: NextPage<FontWeightProps> = (props) => {
  // console.log(props);
  return <Doc {...props} specObj={defaultFontClasses} />;
};

export default FontWeight;
