import React from "react";
import { mount } from "cypress-react-unit-test";
import HelloWorld from "./stateless-alert";

/* eslint-env mocha */
describe("Stateless component", () => {
  beforeEach(() => {
    // pass spy and save it under an alias
    // so we can easily get it later with cy.get('@greeting')
    const spy = cy.spy().as("greeting");
    mount(<HelloWorld name="Test Aficionado" click={spy} />);
  });

  it("shows link", () => {
    cy.contains("button", "Say Hi");
  });

  it("alerts with name", () => {
    cy.contains("Say Hi").click();
    cy.get("@greeting").should("be.calledWith", "Hi Test Aficionado");
  });
});
