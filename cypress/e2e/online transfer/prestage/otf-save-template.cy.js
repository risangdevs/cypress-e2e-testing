import { login, openEFTModal, selectTransferMethod } from "./cases";
import { saveTemplate } from "./cases/use template";
import { exception } from "./utils/exception";
const { prestage } = Cypress.env();
describe("Save Template", () => {
  it("Online Transfer Registered Input Use Template", () => {
    exception();
    login("CU_TESLAINC_M", "Nsel@1234");

    // cy.wait(5000);

    cy.intercept(prestage + "menu/me").as("menu");
    cy.intercept(prestage + "system/key/*").as("params");
    openEFTModal();

    // cy.wait(5000);
    selectTransferMethod("single", "Online Transfer");

    cy.intercept(prestage + "workflow/*").as("getWorkflow");
    cy.wait("@getWorkflow");

    saveTemplate(
      "DEDY YUSUF SILABAN - 037901005847535",
      "ZAKI AHMAD RAMDANI - 001001001234",
      "example@test.com",
      "10101",
      "first",
      "Automated Template"
    );
  });
});
