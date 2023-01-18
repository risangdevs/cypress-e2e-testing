import { login, openEFTModal, selectTransferMethod } from "./cases";
import { saveTemplate, updateTemplate } from "./cases/use template";
const { dev } = Cypress.env();
describe("Update Template", () => {
  it("Online Transfer Registered Input Use Template", () => {
    login("CU_TESLAINC_M", "Nsel@1234");

    cy.wait(5000);

    openEFTModal();

    // cy.wait(5000);

    selectTransferMethod("single", "Online Transfer");

    cy.intercept(dev + "workflow/*").as("getWorkflow");
    cy.wait("@getWorkflow");

    updateTemplate(
      "Automated Template"
    );
  });
});
