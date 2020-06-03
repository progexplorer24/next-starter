import { NextPage } from "next";
import { css } from "@emotion/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro";
import Icon from "@svg/icon-arrow-left.svg";

const Home: NextPage = () => (
  <main>
    <h1
      css={css`
        ${tw`text-6xl`}
      `}
    >
      This is the heading
    </h1>
    <Icon
      css={css`
        ${tw`w-8 h-8`}
      `}
    />
  </main>
);

export default Home;
