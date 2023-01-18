const { dev } = Cypress.env();
export const updateTemplate = (templateName) => {
  // cy.intercept(dev + "account/validate").as("validateBenef");

  cy.contains("Template Options").click();
  cy.contains("Use template").click();
  cy.get(
    '.border-[#5EB0E1] > .flex > .cursor-pointer > .-mr-1 > svg > g > [d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"]'
  ).click();
  // cy.get("div[class='cursor-pointer']").contains("rename").click();
  // cy.contains(templateName).contains('svg').click()
  // cy.get("input[placeholder='Template Name']").type(templateName);
  // cy.get("button[type='button']").contains("Save As Template").click();
};
