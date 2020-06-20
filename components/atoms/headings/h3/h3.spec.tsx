import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H3 from "./h3";

before(() => {
  cy.addGlobalStyles();
});

const text = "This is a heading";

const Component = () => <div data-cy="component">Hello</div>;

describe("H3 Component", () => {
  it("renders text", () => {
    mount(<H3>{text}</H3>);
    cy.contains(text);
  });
  it("renders another component", () => {
    mount(
      <H3>
        <Component />
      </H3>
    );
    cy.get("[data-cy=component]").should("exist");
  });
  it("works with emotion and tailwindcss styling", () => {
    mount(<H3 css={emotionCss([tw`flex`])}>{text}</H3>);
    cy.get("h3").should("have.css", "display", "flex");
  });
});
