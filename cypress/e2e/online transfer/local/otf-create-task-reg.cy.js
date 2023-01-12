import { stepOneRegInput, stepTwo, submitTask } from "./cases";
import { login } from "./cases/login";
import { openEFTModal } from "./cases/openEFTModal";
import { selectTransferMethod } from "./cases/selectTransferMethod";

describe("Create Task", () => {
  it("Online Transfer Registered Input", () => {
    login("CU_TESLAINC_M", "Nsel@1234");

    cy.wait(5000);

    openEFTModal();

    selectTransferMethod("single", "Online Transfer");

    stepOneRegInput(
      "DEDY YUSUF SILABAN - 037901005847535",
      "01-01-CHIP-GOOD - 00520000001506",
      "example@test.com"
    );

    stepTwo("100000", "first", "~!@#$%^&*()_+{}:<>?");

    submitTask();
  });
});
