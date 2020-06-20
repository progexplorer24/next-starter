import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H5 from "./h5";

before(() => {
  cy.addGlobalStyles();
});

const text = "This is a heading";

const Component = () => <div data-cy="component">Hello</div>;

describe("H5 Component", () => {
  it("renders text", () => {
    mount(<H5>{text}</H5>);
    cy.contains(text);
  });
  it("renders another component", () => {
    mount(
      <H5>
        <Component />
      </H5>
    );
    cy.get("[data-cy=component]").should("exist");
  });
  it("works with emotion and tailwindcss styling", () => {
    mount(<H5 css={emotionCss([tw`flex`])}>{text}</H5>);
    cy.get("h5").should("have.css", "display", "flex");
  });
});
