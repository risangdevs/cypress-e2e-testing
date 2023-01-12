import {
  login,
  openEFTModal,
  selectTransferMethod,
  stepOneFreeInput,
  stepTwo,
  submitTask,
} from "./cases";

describe("Create Task", () => {
  it("Online Transfer Free Input", () => {
    login("CU_TESLAINC_M", "Nsel@1234");

    cy.wait(5000);

    openEFTModal();

    selectTransferMethod("single", "Online Transfer");

    stepOneFreeInput(
      "DEDY YUSUF SILABAN - 037901005847535",
      "PT. BANK CENTRAL ASIA Tbk. - 014",
      "00520000001500",
      "example@test.com"
    );

    stepTwo("100000", "first", "~!@#$%^&*()_+{}:<>?");

    submitTask();
  });
});
