import {
  stepOneRegInput,
  stepTwo,
  submitTask,
  login,
  openEFTModal,
  selectTransferMethod,
} from "./cases";
import { exception } from "./utils/exception";
const { dev } = Cypress.env();
describe("Create Task", () => {
  it("Online Transfer Registered Input", () => {
    exception()

    login("CU_TESLAINC_M", "Nsel@1234");

    // cy.wait(5000);

    openEFTModal();

    // cy.wait(5000);

    selectTransferMethod("single", "Online Transfer");

    // cy.wait(5000);

    stepOneRegInput(
      "DEDY YUSUF SILABAN - 037901005847535",
      "ZAKI AHMAD RAMDANI - 001001001234",
      "example@test.com"
    );

    stepTwo("100000", "first", "~!@#$%^&*()_+{}:<>?");

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
