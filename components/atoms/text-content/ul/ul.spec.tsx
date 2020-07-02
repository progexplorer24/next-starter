import React from "react";
import { mount } from "cypress-react-unit-test";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Ul from "./ul";
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

describe("Unordered List Component", () => {
  it("renders single list element with an icon", () => {
    mount(
      <Ul>
        <Li>{singleLi}</Li>
      </Ul>
    );
    cy.get("li").should("have.length", 1).and("contain.text", singleLi);
  });

  it("renders multiple list elements", () => {
    mount(
      <Ul>
        {items.map((item) => (
          <Li key={item}>{item}</Li>
        ))}
      </Ul>
    );

    cy.get("li").should("have.length", 5);
    items.forEach((item) => {
      cy.get("ul").should("contain.text", item).and("be.visible");
    });
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
