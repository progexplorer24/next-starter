declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to add global styles to cypress tests
     * @example cy.addGlobalStyles()
     */
    addGlobalStyles(): void;
  }
}
