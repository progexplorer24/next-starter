import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Hr from "./hr";

before(() => {
  cy.addGlobalStyles();
});

describe("Horizontal rule Component", () => {
  it("works with emotion and tailwindcss styling", () => {
    mount(<Hr css={emotionCss([tw`flex`])} />);
    cy.get("hr").should("have.css", "display", "flex");
  });

  it("can override default styles", () => {
    mount(<Hr css={emotionCss([tw`my-4`])} />);
    cy.get("hr").should("have.css", "margin-top", "16px");
  });
});
