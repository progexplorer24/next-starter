import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H1 from "./h1";

before(() => {
  cy.addGlobalStyles();
});

const text = "This is a heading";

const Component = () => <div data-cy="component">Hello</div>;

describe("H1 Component", () => {
  it("renders text", () => {
    mount(<H1>{text}</H1>);
    cy.contains(text);
  });
  it("renders another component", () => {
    mount(
      <H1>
        <Component />
      </H1>
    );
    cy.get("[data-cy=component]").should("exist");
  });
  it("works with emotion and tailwindcss styling", () => {
    mount(<H1 css={emotionCss([tw`flex`])}>{text}</H1>);
    cy.get("h1").should("have.css", "display", "flex");
  });
});
