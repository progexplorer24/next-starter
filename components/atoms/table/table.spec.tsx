import React, { ReactElement } from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Table from "./table";
import type { TrProps } from "./tr/tr";

before(() => {
  cy.addGlobalStyles();
});

const Component = (): ReactElement<
  TrProps,
  (props: TrProps) => ReactElement
> => <tr data-cy="component">Hello</tr>;

describe("Table Component", () => {
  it("renders another component", () => {
    mount(
      <Table>
        <Component />
      </Table>
    );
    cy.get("[data-cy=component]").should("exist").and("be.visible");
  });
  it("works with emotion and tailwindcss styling", () => {
    mount(<Table css={emotionCss([tw`flex`])} />);
    cy.get("table").should("have.css", "display", "flex");
  });
  it("can override default styles", () => {
    mount(<Table css={emotionCss([tw`border-separate`])} />);
    cy.get("table").should("have.css", "border-collapse", "separate");
  });
});
