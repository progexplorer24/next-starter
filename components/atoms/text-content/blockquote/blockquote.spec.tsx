import React from "react";
import { mount } from "cypress-react-unit-test";
import { css } from "@emotion/core";
import tw from "twin.macro";
import Blockquote from "./blockquote";

before(() => {
  cy.addGlobalStyles();
});

const text = "Hello World!";

const P = () => <p data-cy="component">{text}</p>;

describe("Blockquote component", () => {
  it("renders another component", () => {
    mount(
      <Blockquote>
        <P />
      </Blockquote>
    );
    cy.contains(text);
    cy.get("[data-cy=component]").should("exist");
  });

  it("works with emotion and tailwindcss styling", () => {
    mount(
      <Blockquote
        css={css`
          ${tw`flex`}
        `}
      >
        <p>{text}</p>
      </Blockquote>
    );

    cy.get("blockquote").should("have.css", "display", "flex");
  });
});
