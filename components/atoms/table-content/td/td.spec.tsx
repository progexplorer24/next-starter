import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Table from "../table/table";
import Td from "./td";
import Tr from "../tr/tr";

before(() => {
  cy.addGlobalStyles();
});

const Component = () => <div data-cy="component">Hello</div>;

describe("Table cell Component", () => {
  it("renders text", () => {
    mount(
      <Table>
        <Tr>
          <Td>Table cell</Td>
        </Tr>
      </Table>
    );
    cy.get("td")
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Table cell");
  });
  it("renders another component", () => {
    mount(
      <Table>
        <Tr>
          <Td>
            <Component />
          </Td>
        </Tr>
      </Table>
    );
    cy.get("[data-cy=component]")
      .should("exist")
      .and("be.visible")
      .and("have.length", 1);
  });
  it("renders multiple components", () => {
    mount(
      <Table>
        <Tr>
          <Td>
            <Component />
            <Component />
            <Component />
          </Td>
        </Tr>
      </Table>
    );
    cy.get("[data-cy=component]")
      .should("exist")
      .and("be.visible")
      .and("have.length", 3);
  });
  it("works with emotion and tailwindcss styling", () => {
    mount(
      <Table>
        <Tr>
          <Td css={emotionCss([tw`flex`])}>Table cell</Td>
        </Tr>
      </Table>
    );
    cy.get("td").should("have.css", "display", "flex");
  });
});
