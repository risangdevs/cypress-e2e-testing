const { dev } = Cypress.env();
export const saveTemplate = (
  sender,
  benef,
  benefEmail,
  amount,
  frequency,
  templateName
) => {
  cy.intercept(dev + "account/validate").as("validateBenef");

  cy.get("#react-select-senderAccountNumber-input").click();
  cy.contains(sender).click();
  cy.get("#react-select-receiverAccountNumber-input").click();
  cy.contains(benef).click();
  cy.get("input[name=receiverAccountEmail]").type(benefEmail);
  // cy.wait(5000);
  cy.wait("@validateBenef");
  cy.contains("Next").click({ force: true });

  cy.get("input[name=amount]").type(amount);
  cy.get(
    `input[type="radio"][name="transactionScheduleType"]:${frequency}`
  ).click();

  cy.contains("Template Options").click();
  cy.contains("Save current form as template").click();
  cy.get("input[placeholder='Template Name']").type(templateName);
  cy.get("button[type='button']").contains("Save As Template").click();
};
