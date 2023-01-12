describe("empty spec", () => {
  it("Online Transfer", () => {
    cy.visit("https://addons.cms.dev.bri.co.id/login");
    cy.wait(5000);

    cy.get("input[type=text]").type("CU_TESLAINC_M");
    // .should("have.value", "BA_MAYAN_M");

    cy.get("input[type=password]").type("Nsel@1234");
    cy.contains("Sign In").click();

    cy.wait(10000);
    cy.contains("Fund Transfer").click({ force: true });
    cy.contains("BRI to Other").click({ force: true });
    cy.contains("Make a Transfer").click({ force: true });

    cy.get('[name="single"]').click();
    cy.get('[name="Online Transfer"]').click();
    cy.contains("Next").click({ force: true });
    cy.get("#react-select-senderAccountNumber-input").click();
    cy.contains("DEDY YUSUF SILABAN - 037901005847535").click();
    cy.get("#react-select-receiverAccountNumber-input").click();
    cy.contains("ZAKI AHMAD RAMDANI - 001001001234").click();

    cy.get("input[name=receiverAccountEmail]").type("example@test.com");
    cy.wait(5000);
    cy.contains("Next").click({ force: true });
    cy.get("input[name=amount]").type("100000");
    cy.get('input[type="radio"][name="transactionScheduleType"]:first').click();
    cy.get("textarea[name=remark]").type("remark");
    cy.contains("Next").click({ force: true });
    cy.contains("Save & Send for Approv").click({ force: true });
    cy.contains("Submit").click({ force: true });
  });
});
