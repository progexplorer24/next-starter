import React, { ReactElement } from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { TrProps } from "@components/types";
import Table from "../table";
import Tbody from "./tbody";

before(() => {
  cy.addGlobalStyles();
});

const Component = (): ReactElement<
  TrProps,
  (props: TrProps) => ReactElement
> => <tr data-cy="component">Hello</tr>;

describe("Table Body Component", () => {
  it("renders with no tr components", () => {
    mount(
      <Table>
        <Tbody />
      </Table>
    );
    cy.get("tbody").should("exist");
  });
  it("renders single tr component", () => {
    mount(
      <Table>
        <Tbody>
          <Component />
        </Tbody>
      </Table>
    );
    cy.get("[data-cy=component]")
      .should("exist")
      .and("be.visible")
      .and("have.length", 1);
  });
  it("renders multiple tr components", () => {
    mount(
      <Table>
        <Tbody>
          <Component />
          <Component />
          <Component />
        </Tbody>
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
        <Tbody css={emotionCss([tw`flex`])} />
      </Table>
    );
    cy.get("tbody").should("have.css", "display", "flex");
  });
});
