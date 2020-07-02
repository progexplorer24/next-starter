import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Li from "./li";

before(() => {
  cy.addGlobalStyles();
});

const text = "This is list element";

const Component = () => <div data-cy="component">Hello</div>;

describe("List item Component", () => {
  it("renders text", () => {
    mount(<Li>{text}</Li>);
    cy.contains(text);
  });

  it("renders another component", () => {
    mount(
      <Li>
        <Component />
      </Li>
    );
    cy.get("[data-cy=component]").should("exist").and("be.visible");
  });
  it("works with emotion and tailwindcss styling", () => {
    mount(<Li css={emotionCss([tw`clear-left`])}>{text}</Li>);
    cy.get("li").should("have.css", "clear", "left");
  });
});
