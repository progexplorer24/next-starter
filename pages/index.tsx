import { NextPage, GetStaticProps } from "next";
import { css } from "@emotion/core";

import tw from "twin.macro";
import Table from "@components/atoms/table-content/table/table";
import Thead from "@components/atoms/table-content/thead/thead";
import Th from "@components/atoms/table-content/th/th";
import Tr from "@components/atoms/table-content/tr/tr";
import Tbody from "@components/atoms/table-content/tbody/tbody";
import Td from "@components/atoms/table-content/td/td";
import Ul from "@components/basic/lists/ul/ul";
import Li from "@components/basic/lists/li/li";
import TextHr from "@components/text-hr";
import Img from "@components/atoms/multimedia/img/img";
import MainContainer from "layouts/main-container";

import Nav from "@components/nav/nav";
import A from "@components/atoms/inline-text-semantics/a/a";
// import ColorPill from "@components/docs/color-pill/color-pill";

import RenderColorPalette from "@components/docs/render-color-palette/render-color-palette";
import H1 from "@components/basic/h1/h1";
import Ol from "@components/basic/lists/ol/ol";
import ButtonRipple from "@components/button/button-ripple";

type HomeProps = Record<string, unknown>;

const Home: NextPage<HomeProps> = () => {
  return (
    <main>
      <Nav />
      <MainContainer>
        {/* <div
          css={css`
                ${tw`mt-2`}
              `}
        >
          <ColorPill twClass={tw`bg-red-100`} color="#FF3322" value="100" />
          <ColorPill twClass={tw`bg-red-200`} color="#FF3322" value="200" />
          <ColorPill twClass={tw`bg-red-300`} color="#FF3322" value="300" />
          <ColorPill twClass={tw`bg-red-400`} color="#FF3322" value="400" />
          <ColorPill twClass={tw`bg-red-500`} color="#FF3322" value="500" />
          <ColorPill twClass={tw`bg-red-600`} color="#FF3322" value="600" />
          <ColorPill twClass={tw`bg-red-700`} color="#FF3322" value="700" />
          <ColorPill twClass={tw`bg-red-800`} color="#FF3322" value="800" />
          <ColorPill twClass={tw`bg-red-900`} color="#FF3322" value="900" />
        </div> */}

        <ButtonRipple>Hello</ButtonRipple>

        <Ol>
          <Li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            vero consequatur iusto qui nostrum eaque impedit animi officia.
            Officiis placeat repellat cum maiores eos voluptatibus laboriosam
            sunt velit voluptates iste recusandae alias, possimus facere
            pariatur suscipit nam excepturi quod harum veniam! Soluta facere,
            unde odio perspiciatis totam incidunt ipsam. Nihil?
          </Li>
          <Li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            accusantium?
          </Li>
          <Li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Li>
          <Li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Li>
        </Ol>

        <H1>Color Palette</H1>

        <RenderColorPalette />

        <A
          css={css`
            ${tw`block`}
          `}
          href="https://google.com"
        >
          Link
        </A>
        <Img
          css={css`
            ${tw`w-32 h-32`}
          `}
          alt="CDC 3d generated bacteria"
          src="../imgs/bacteria.jpg"
        />

        <Ul>
          <Li>Hello world</Li>
          <Li>MDX List Element</Li>
          <Li>I&apos;m another LI element</Li>
          <Li>Last List Element</Li>
        </Ul>

        <TextHr />

        <Table>
          <Thead
            css={css`
              ${tw`border-t border-b border-gray-400`}
            `}
          >
            <Tr>
              <Th>Tailwind Class</Th>
              <Th>Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td
                css={css`
                  ${tw`p-2 font-mono text-xs font-semibold text-indigo-700`}
                `}
              >
                text-xs
              </Td>
              <Td
                css={css`
                  ${tw`p-2 font-mono text-xs text-purple-600`}
                `}
              >
                font-size: .75rem;
              </Td>
            </Tr>
            <Tr>
              <td
                css={css`
                  ${tw`p-2 font-mono text-xs border-t border-gray-300`}
                `}
              >
                text-xs
              </td>
              <td
                css={css`
                  ${tw`p-2 font-mono text-xs border-t border-gray-300`}
                `}
              >
                font-size: .75rem;
              </td>
            </Tr>
            <Tr>
              <td
                css={css`
                  ${tw`p-2 font-mono text-xs border-t border-gray-300`}
                `}
              >
                text-xs
              </td>
              <td
                css={css`
                  ${tw`p-2 font-mono text-xs border-t border-gray-300`}
                `}
              >
                font-size: .75rem;
              </td>
            </Tr>
          </Tbody>
        </Table>
      </MainContainer>
    </main>
  );
};

export default Home;

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
