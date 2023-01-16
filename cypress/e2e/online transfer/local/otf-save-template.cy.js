import { login, openEFTModal, selectTransferMethod } from "./cases";
import { saveTemplate } from "./cases/use template";
const { dev } = Cypress.env();
describe("Save Template", () => {
  it("Online Transfer Registered Input Use Template", () => {
    login("CU_TESLAINC_M", "Nsel@1234");

    cy.wait(5000);

    openEFTModal();

    // cy.wait(5000);

    selectTransferMethod("single", "Online Transfer");

    cy.intercept(dev + "workflow/*").as("getWorkflow");
    cy.wait("@getWorkflow");

    saveTemplate(
      "DEDY YUSUF SILABAN - 037901005847535",
      "ZAKI AHMAD RAMDANI - 001001001234",
      "example@test.com",
      Math.floor(Math.random() * 100000).toString(),
      "first",
      "Automated Template"
    );
  });
});
