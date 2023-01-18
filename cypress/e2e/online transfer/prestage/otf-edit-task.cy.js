import { slowCypressDown } from "cypress-slow-down";

slowCypressDown(500);
describe("to history", () => {
  it("to history", () => {
    cy.visit("http://localhost:4200/login?logout=true");
    cy.visit("http://localhost:4200/login");

    cy.get("input[type=text]").type("CU_TESLAINC_M");

    cy.get("input[type=password]").type("Nsel@1234");
    cy.contains("Sign In").click();

    cy.wait(5000);
    cy.contains("Fund Transfer").click({ force: true });
    cy.contains("BRI to Other").click({ force: true });
    cy.contains("Transfer History").click({ force: true });

    cy.wait(5000);
    cy.contains("BI-Fast").click({ force: true });
    cy.wait(5000);
    cy.get(
      '[style="right: 0px; overflow: initial; text-align: center;"] > .flex > .inline-flex'
    ).click();
  });
});
