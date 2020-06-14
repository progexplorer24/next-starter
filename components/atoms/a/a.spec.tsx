import React from "react";
import { mount } from "cypress-react-unit-test";
import { css } from "@emotion/core";
import tw from "twin.macro";
import RightArrow from "./right-arrow.svg";
import A from "./a";

before(() => {
  cy.addGlobalStyles();
});

const text = "Hello World!";
const url = "/";

const Component = () => (
  <div
    css={css`
      ${tw`w-20 h-20 text-white bg-purple-600`}
    `}
    data-cy="component"
  >
    Purple square
  </div>
);

describe("A component", () => {
  it("renders children", () => {
    mount(<A href="/">{text}</A>);
    cy.contains(text);
  });

  it("renders children with icons", () => {
    mount(
      <A href={url}>
        <RightArrow
          css={css`
            ${tw`w-8 h-8`}
          `}
        />
        {text}
      </A>
    );

    cy.get("svg").should("have.length", 1);
  });

  it("renders another component", () => {
    mount(
      <A href="/">
        <Component />
      </A>
    );

    cy.get("[data-cy=component]").should("exist");
  });

  it("works with emotion and tailwindcss styling", () => {
    mount(
      <A
        href={url}
        css={css`
          ${tw`flex`}
        `}
      >
        {text}
      </A>
    );

    cy.get("a").should("have.css", "display", "flex");
  });

  it("includes valid href attribute", () => {
    mount(
      <A href={url}>
        <RightArrow
          css={css`
            ${tw`w-8 h-8`}
          `}
        />
        {text}
      </A>
    );

    cy.url().should("include", "/");
  });
});
