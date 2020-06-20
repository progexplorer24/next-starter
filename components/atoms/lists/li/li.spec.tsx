import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Li from "./li";
import RightArrow from "../ul/right-arrow.svg";

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

  it("renders text with an icon", () => {
    mount(
      <Li
        listDecoration={
          <RightArrow css={emotionCss([tw`inline-block w-6 h-6 pt-2 mr-2`])} />
        }
      >
        {text}
      </Li>
    );
    cy.contains(text);
    cy.get("svg").should("exist");
  });
  it("renders another component", () => {
    mount(
      <Li>
        <Component />
      </Li>
    );
    cy.get("[data-cy=component]").should("exist");
  });
  it("works with emotion and tailwindcss styling", () => {
    mount(<Li css={emotionCss([tw`clear-left`])}>{text}</Li>);
    cy.get("li").should("have.css", "clear", "left");
  });
  it("can override default styles", () => {
    mount(<Li css={emotionCss([tw`block`])}>{text}</Li>);
    cy.get("li").should("have.css", "display", "block");
  });
});
