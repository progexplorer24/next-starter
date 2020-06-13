import React from "react";
import { mount } from "cypress-react-unit-test";
import A from "./a";

before(() => {
  cy.addGlobalStyles();
});

describe("A component", () => {
  it("renders children", () => {
    const text = "Hello World!";

    mount(<A href="/">{text}</A>);
    cy.contains(text);
  });
});
