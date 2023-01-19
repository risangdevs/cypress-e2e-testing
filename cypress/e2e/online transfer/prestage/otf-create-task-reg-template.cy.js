import {
  stepOneRegInput,
  stepTwo,
  submitTask,
  login,
  openEFTModal,
  selectTransferMethod,
  stepOneRegInputTemplate,
} from "./cases";
import { exception } from "./utils/exception";
const { prestage } = Cypress.env();
describe("Create Task From Template", () => {
  it("Online Transfer Registered Input Use Template", () => {
    exception()
    login("CU_TESLAINC_M", "Nsel@1234");

    // cy.wait(5000);
    cy.intercept(prestage+'menu/me').as('menu')
    cy.intercept(prestage+'system/key/*').as('params')

    openEFTModal();

    // cy.wait(5000);

    selectTransferMethod("single", "Online Transfer");

    cy.intercept(prestage+'workflow/*').as('getWorkflow')
    cy.wait("@getWorkflow");

    stepOneRegInputTemplate("Automated Template");

    stepTwo();

    // cy.wait(1000);

    // if (cy.contains("next active day")) {
    //   cy.get('[type="button"]').contains("Next").click();
    // } else {
    submitTask();
    // }

    // cy.contains("next active day").then(() =>
    //   cy.get('[type="button"]').contains("Next").click()
    // ).catch(()=>submitTask())
  });
});
