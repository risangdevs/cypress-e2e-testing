const { dev } = Cypress.env();
export const stepOneRegInputTemplate = (templateName) => {
  cy.intercept(dev + "account/validate").as("validateBenef");

  cy.contains("Template Options").click();
  cy.contains("Use template").click();
  cy.contains(templateName).click();
  cy.get('[type="button"]').contains("Use Template").click();
  cy.wait("@validateBenef");
  cy.contains("Next").click({ force: true });
};
