export const stepTwo=(amount,frequency,remark)=>{
    cy.get("input[name=amount]").type(amount);
    cy.get(`input[type="radio"][name="transactionScheduleType"]:${frequency}`).click();
    cy.get("textarea[name=remark]").type(remark);
    cy.contains("Next").click({ force: true });
}