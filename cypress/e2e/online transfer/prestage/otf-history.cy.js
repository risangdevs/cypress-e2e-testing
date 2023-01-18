import { login } from "./cases/login";
import { toHistory } from "./cases/toHistory";

describe("to history", () => {
  it("to history", () => {
    login("CU_TESLAINC_M","Nsel@1234")

    cy.wait(5000);
   
    toHistory()

    cy.wait(5000);
    cy.contains("BI-Fast").click({ force: true });
  });
});
