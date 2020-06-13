import prettier from "prettier";
import fs from "fs";

const returnCodeExamples = (pathToFile: string): RegExpMatchArray => {
  /**
  |--------------------------------------------------
  | This regular expressions looks for substrings between @!-example-!@ 
  |--------------------------------------------------
  */
  const code = fs.readFileSync(pathToFile, "utf8");
  const regExp = /(?<=!!-example-!!\*\/)(.*?)(?=\/\* @@-example-@@)/gs;

  const examples = code.match(regExp) ?? [];

  const prettifyExamples = examples.map((example) =>
    prettier.format(example, {
      parser: "babel-ts",
    })
  );

  return prettifyExamples;
};

export default returnCodeExamples;
