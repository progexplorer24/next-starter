import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H6 from "./h6";

before(() => {
  cy.addGlobalStyles();
});

const text = "This is a heading";

const Component = () => <div data-cy="component">Hello</div>;

describe("H6 Component", () => {
  it("renders text", () => {
    mount(<H6>{text}</H6>);
    cy.contains(text);
  });
  it("renders another component", () => {
    mount(
      <H6>
        <Component />
      </H6>
    );
    cy.get("[data-cy=component]").should("exist");
  });
  it("works with emotion and tailwindcss styling", () => {
    mount(<H6 css={emotionCss([tw`flex`])}>{text}</H6>);
    cy.get("h6").should("have.css", "display", "flex");
  });
});
