import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Img from "./img";

before(() => {
  cy.addGlobalStyles();
});

describe("Img Component", () => {
  it("works", () => {
    mount(<Img alt="testing alt" src="path/" />);
    cy.get("img").should("exist");
    cy.get("img")
      .should("have.attr", "alt", "testing alt")
      .and("have.attr", "src", "path/");
  });
  it("works with emotion and tailwindcss styling", () => {
    mount(<Img src="path/" alt="testing alt" css={emotionCss([tw`flex`])} />);
    cy.get("img").should("have.css", "display", "flex");
  });
});
