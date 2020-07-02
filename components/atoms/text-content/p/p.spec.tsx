import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import P from "./p";

before(() => {
  cy.addGlobalStyles();
});

const text = "This is a paragraph";

const Component = () => (
  <span css={emotionCss([tw`text-purple-700`])} data-cy="component">
    Hello
  </span>
);

describe("P Component", () => {
  it("renders text", () => {
    mount(<P>{text}</P>);
    cy.contains(text);
  });
  it("renders another component", () => {
    mount(
      <P>
        <Component />
      </P>
    );
    cy.get("[data-cy=component]").should("exist").and("be.visible");
  });
  it("works with emotion and tailwindcss styling", () => {
    mount(<P css={emotionCss([tw`flex`])}>{text}</P>);
    cy.get("p").should("have.css", "display", "flex");
  });
});
