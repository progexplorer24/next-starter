import React, { ReactElement } from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { TrProps } from "@components/atoms/atom-types";
import Table from "../table/table";
import Thead from "./thead";

before(() => {
  cy.addGlobalStyles();
});

const Component = (): ReactElement<
  TrProps,
  (props: TrProps) => ReactElement
> => <tr data-cy="component">Hello</tr>;

describe("Table Head Component", () => {
  it("renders with no tr components", () => {
    mount(
      <Table>
        <Thead />
      </Table>
    );
    cy.get("thead").should("exist");
  });
  it("renders single tr component", () => {
    mount(
      <Table>
        <Thead>
          <Component />
        </Thead>
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
        <Thead>
          <Component />
          <Component />
          <Component />
        </Thead>
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
        <Thead css={emotionCss([tw`flex`])} />
      </Table>
    );
    cy.get("thead").should("have.css", "display", "flex");
  });
});
