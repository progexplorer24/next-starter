import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H2 from "./h2";

before(() => {
  cy.addGlobalStyles();
});

const text = "This is a heading";

const Component = () => <div data-cy="component">Hello</div>;

describe("H2 Component", () => {
  it("renders text", () => {
    mount(<H2>{text}</H2>);
    cy.contains(text);
  });
  it("renders another component", () => {
    mount(
      <H2>
        <Component />
      </H2>
    );
    cy.get("[data-cy=component]").should("exist");
  });
  it("works with emotion and tailwindcss styling", () => {
    mount(<H2 css={emotionCss([tw`flex`])}>{text}</H2>);
    cy.get("h2").should("have.css", "display", "flex");
  });
});
