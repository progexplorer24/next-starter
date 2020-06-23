import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Li from "./li";

before(() => {
  cy.addGlobalStyles();
});

const text = "This is list element";

describe("Basic List item Component", () => {
  it("can override default styles", () => {
    mount(<Li css={emotionCss([tw`font-bold`])}>{text}</Li>);
    cy.get("li").should("have.css", "font-weight", "700");
  });
});
