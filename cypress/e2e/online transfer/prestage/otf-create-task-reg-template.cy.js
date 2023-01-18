import {
  stepOneRegInput,
  stepTwo,
  submitTask,
  login,
  openEFTModal,
  selectTransferMethod,
  stepOneRegInputTemplate,
} from "./cases";
const { dev } = Cypress.env();
describe("Create Task", () => {
  it("Online Transfer Registered Input Use Template", () => {
    login("CU_TESLAINC_M", "Nsel@1234");

    // cy.wait(5000);

    openEFTModal();

    // cy.wait(5000);

    selectTransferMethod("single", "Online Transfer");

    cy.intercept(dev+'workflow/*').as('getWorkflow')
    cy.wait("@getWorkflow");

    stepOneRegInputTemplate("Recurring Daily");

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
