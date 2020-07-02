import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H4 from "./h4";

before(() => {
  cy.addGlobalStyles();
});

const text = "This is a heading";

const Component = () => <div data-cy="component">Hello</div>;

describe("H4 Component", () => {
  it("renders text", () => {
    mount(<H4>{text}</H4>);
    cy.contains(text);
  });
  it("renders another component", () => {
    mount(
      <H4>
        <Component />
      </H4>
    );
    cy.get("[data-cy=component]").should("exist");
  });
  it("works with emotion and tailwindcss styling", () => {
    mount(<H4 css={emotionCss([tw`flex`])}>{text}</H4>);
    cy.get("h4").should("have.css", "display", "flex");
  });
});
