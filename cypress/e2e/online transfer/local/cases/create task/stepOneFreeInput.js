export const stepOneFreeInput = (
  sender,
  benefBankCode,
  benefAccNum,
  benefEmail
) => {
  cy.wait(1000);
  cy.get("#react-select-senderAccountNumber-input").click();
  cy.contains(sender).click();
  cy.get('[id="react-select-bankCode-input"]').click();
  cy.contains(benefBankCode).click();
  cy.get('[name="receiverAccountNumber"]').type(benefAccNum);
  cy.get("input[name=receiverAccountEmail]").type(benefEmail);
  cy.wait(5000);
  cy.contains("Next").click({ force: true });
};
