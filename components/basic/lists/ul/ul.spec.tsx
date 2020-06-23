import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Ul from "./ul";
import Li from "../li/li";

before(() => {
  cy.addGlobalStyles();
});

const singleLi = "Just one list item.";

describe("Basic Unordered List Component", () => {
  it("renders single list element with an icon", () => {
    mount(
      <Ul>
        <Li>{singleLi}</Li>
      </Ul>
    );
    cy.get("li")
      .should("have.length", 1)
      .and("contain.text", singleLi)
      .and("contain.html", "svg");
  });

  it("works with emotion and tailwindcss styling", () => {
    mount(
      <Ul css={emotionCss([tw`clear-left`])}>
        <Li>{singleLi}</Li>
      </Ul>
    );
    cy.get("ul").should("have.css", "clear", "left");
  });
  it("can override default styles", () => {
    mount(
      <Ul css={emotionCss([tw`mt-0`])}>
        <Li>{singleLi}</Li>
      </Ul>
    );
    cy.get("ul").should("have.css", "margin-top", "0px");
  });
});
