const { prestage } = Cypress.env();
export const openEFTModal = () => {
  cy.intercept(prestage + "menu/me").as("menu");
  cy.wait(["@menu"]);

  cy.contains("Fund Transfer").click({ force: true });
  cy.contains("BRI to Other").click({ force: true });
  cy.contains("Make a Transfer").click({ force: true });
};
