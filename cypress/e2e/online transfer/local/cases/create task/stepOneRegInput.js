export const stepOneRegInput = (sender, benef, benefEmail) => {
  cy.get("#react-select-senderAccountNumber-input").click();
  cy.contains(sender).click();
  cy.get("#react-select-receiverAccountNumber-input").click();
  cy.contains(benef).click();
  cy.get("input[name=receiverAccountEmail]").type(benefEmail);
};
