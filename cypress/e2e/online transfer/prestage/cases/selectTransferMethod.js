const { prestage } = Cypress.env();
export const selectTransferMethod = (inputMethod, transferMethod) => {
  
  cy.wait("@params");
  cy.get(`[name=${inputMethod}]`).click();
  cy.get(`[name="${transferMethod}"]`).click();
  cy.contains("Next").click({ force: true });
};
