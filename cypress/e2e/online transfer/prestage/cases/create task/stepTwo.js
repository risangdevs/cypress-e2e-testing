const { prestage } = Cypress.env();
export const stepTwo = (amount, frequency, remark) => {
  cy.intercept(prestage + "/cut-off/*").as("checkCutOff");
  if (amount && frequency) {
    cy.get("input[name=amount]").type(amount);
    cy.get(
      `input[type="radio"][name="transactionScheduleType"]:${frequency}`
    ).click();
  } else if (remark) {
    cy.get("textarea[name=remark]").type(remark);
  }
  cy.contains("Next").click({ force: true });
  cy.wait("@checkCutOff");
};
