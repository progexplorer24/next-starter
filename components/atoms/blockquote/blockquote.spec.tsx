import React from "react";
import { mount } from "cypress-react-unit-test";
import { css } from "@emotion/core";
import tw from "twin.macro";
import Blockquote from "./blockquote";
import RightArrow from "./right-arrow.svg";
import P from "../p/p";

before(() => {
  cy.addGlobalStyles();
});

const text = "Hello World!";

describe("Blockquote component", () => {
  it("renders another component", () => {
    mount(
      <Blockquote>
        <P>{text}</P>
      </Blockquote>
    );
    cy.contains(text);
  });

  it("renders children with icons", () => {
    mount(
      <Blockquote>
        <p>
          <RightArrow
            css={css`
              ${tw`w-8 h-8`}
            `}
          />
        </p>
      </Blockquote>
    );

    cy.get("svg").should("have.length", 1);
  });

  it("works with emotion and tailwindcss styling", () => {
    mount(
      <Blockquote
        css={css`
          ${tw`flex`}
        `}
      >
        <p>{text}</p>
      </Blockquote>
    );

    cy.get("blockquote").should("have.css", "display", "flex");
  });

  it("passes down styles to child element", () => {
    mount(
      <Blockquote>
        <P
          css={css`
            ${tw`flex`}
          `}
          data-cy="child"
        >
          Nice to meet you
        </P>
      </Blockquote>
    );

    cy.get("[data-cy=child]").should("have.css", "display", "flex");
  });
});
