const { prestage } = Cypress.env();
export const selectTransferMethod = (inputMethod, transferMethod) => {
  cy.intercept(prestage + "system/key/*").as("params");
  cy.wait("@params");
  cy.get(`[name=${inputMethod}]`).click();
  cy.get(`[name="${transferMethod}"]`).click();
  cy.contains("Next").click({ force: true });
};
