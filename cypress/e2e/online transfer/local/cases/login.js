const {dev}=Cypress.env()
export const login = (username, password) => {
  cy.clearAllLocalStorage();
  cy.visit("http://localhost:4200/login");

  cy.get("input[type=text]").type(username);

  cy.get("input[type=password]").type(password);
  
  cy.intercept(dev+"auth/login/password").as("login");
  cy.contains("Sign In").click();
  cy.wait(["@login"]);
};
