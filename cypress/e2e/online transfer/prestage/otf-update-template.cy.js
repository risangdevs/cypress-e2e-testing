import { login, openEFTModal, selectTransferMethod } from "./cases";
import { saveTemplate, updateTemplate } from "./cases/use template";
import { exception } from "./utils/exception";
const { prestage } = Cypress.env();
describe("Update Template", () => {
  it("Online Transfer Registered Input Use Template", () => {
    exception()
    login("CU_TESLAINC_M", "Nsel@1234");

    cy.intercept(prestage + "menu/me").as("menu");
    cy.intercept(prestage + "system/key/*").as("params");

    openEFTModal();

    selectTransferMethod("single", "Online Transfer");

    cy.intercept(prestage + "workflow/*").as("getWorkflow");
    cy.wait("@getWorkflow");

    updateTemplate("Automated Template");
  });
});
