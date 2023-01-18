const { dev,prestage } = Cypress.env();
export const login = (username, password) => {
  cy.clearAllLocalStorage();
  // cy.intercept(prestage + "system/key/*").as("pre-login");
  cy.visit("https://addons.cms.dev.bri.co.id");
  // cy.wait(["@pre-login","@pre-login","@pre-login","@pre-login"]);

  cy.get("input[type=text]").type(username);

  cy.get("input[type=password]").type(password);

  cy.intercept(prestage + "auth/login/password").as("login");
  cy.contains("Sign In").click();
  cy.wait(["@login"]);
};
