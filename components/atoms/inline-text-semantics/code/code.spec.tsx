import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Code from "./code";

before(() => {
  cy.addGlobalStyles();
});

const text = "background-color: red;";

const Component = () => <div data-cy="component">Hello</div>;

describe("Code Component", () => {
  it("renders text", () => {
    mount(<Code>{text}</Code>);
    cy.contains(text);
  });
  it("renders another component", () => {
    mount(
      <Code>
        <Component />
      </Code>
    );
    cy.get("[data-cy=component]").should("exist");
  });
  it("works with emotion and tailwindcss styling", () => {
    mount(<Code css={emotionCss([tw`flex`])}>{text}</Code>);
    cy.get("code").should("have.css", "display", "flex");
  });
});
