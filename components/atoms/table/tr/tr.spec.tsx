import React, { ReactElement } from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { TdProps } from "@components/atoms/atom-types";
import Table from "../table";
import Tr from "./tr";

before(() => {
  cy.addGlobalStyles();
});

const Component = (): ReactElement<
  TdProps,
  (props: TdProps) => ReactElement
> => <td data-cy="component">Hello</td>;

describe("Table Row Component", () => {
  it("renders with no td components", () => {
    mount(
      <Table>
        <Tr />
      </Table>
    );
    cy.get("tr").should("exist");
    cy.get("td").should("have.length", 0);
  });
  it("renders single td component", () => {
    mount(
      <Table>
        <Tr>
          <Component />
        </Tr>
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
        <Tr>
          <Component />
          <Component />
          <Component />
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
        <Tr css={emotionCss([tw`flex`])} />
      </Table>
    );
    cy.get("tr").should("have.css", "display", "flex");
  });
});
