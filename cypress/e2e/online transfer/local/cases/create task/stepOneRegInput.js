const {dev}=Cypress.env()
export const stepOneRegInput = (sender, benef, benefEmail) => {

  cy.intercept(dev+"account/validate").as('validateBenef')

  cy.get("#react-select-senderAccountNumber-input").click();
  cy.contains(sender).click();
  cy.get("#react-select-receiverAccountNumber-input").click();
  cy.contains(benef).click();
  cy.get("input[name=receiverAccountEmail]").type(benefEmail);
  // cy.wait(5000);
  cy.wait('@validateBenef')
  cy.contains("Next").click({ force: true });
};
