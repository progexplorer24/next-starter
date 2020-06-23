import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Ol from "./ol";
import Li from "../li/li";

before(() => {
  cy.addGlobalStyles();
});
const items = [
  "List item 1",
  "List item 2",
  "List item 3",
  "List item 4",
  "List item 5",
];

const singleLi = "Just one list item.";

describe("Ordered List Component", () => {
  it("renders single list element with numeration", () => {
    mount(
      <Ol>
        <Li>{singleLi}</Li>
      </Ol>
    );
    cy.get("ol").should("exist").and("be.visible");
    cy.get("li").should("have.length", 1).and("contain.text", singleLi);
  });

  it("renders multiple list elements with correct numeration", () => {
    mount(
      <Ol>
        {items.map((item) => (
          <Li key={item}>{item}</Li>
        ))}
      </Ol>
    );

    cy.get("li").should("have.length", 5);
    items.forEach((item) => {
      cy.get("ol").should("contain.text", item).and("be.visible");
    });
  });
  it("works with emotion and tailwindcss styling", () => {
    mount(
      <Ol css={emotionCss([tw`clear-left`])}>
        <Li>{singleLi}</Li>
      </Ol>
    );
    cy.get("ol").should("have.css", "clear", "left");
  });
  it("can override default styles", () => {
    mount(
      <Ol css={emotionCss([tw`mt-0`])}>
        <Li>{singleLi}</Li>
      </Ol>
    );
    cy.get("ol").should("have.css", "margin-top", "0px");
  });
});
