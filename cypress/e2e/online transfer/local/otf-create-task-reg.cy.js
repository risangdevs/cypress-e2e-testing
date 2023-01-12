import { stepOneRegInput, stepTwo, submitTask } from "./cases";
import { login } from "./cases/login";
import { openEFTModal } from "./cases/openEFTModal";
import { selectTransferMethod } from "./cases/selectTransferMethod";

describe("Create Task", () => {
  it("Online Transfer Registered Input", () => {
    login("CU_TESLAINC_M", "Nsel@1234");

    cy.wait(5000);

    openEFTModal();

    cy.wait(1000);

    selectTransferMethod("single", "Online Transfer");

    cy.wait(1000)

    stepOneRegInput(
      "DEDY YUSUF SILABAN - 037901005847535",
      "ZAKI AHMAD RAMDANI - 001001001234",
      "example@test.com"
    );

    stepTwo("100000", "first", "~!@#$%^&*()_+{}:<>?");

      cy.wait(1000)

    if (cy.contains("next active day")) {
      cy.contains("Next").eq(1).click();
    }

    submitTask();
  });
});
