export const submitTask = () => {
  cy.contains("Save & Send for Approv").click({ force: true });
  cy.contains("Submit").click({ force: true });
};
