const {dev}=Cypress.env()
export const selectTransferMethod=(inputMethod,transferMethod)=>{
    cy.intercept(dev+"system/key/*").as('params')
    cy.wait('@params')
    cy.get(`[name=${inputMethod}]`).click();
    cy.get(`[name="${transferMethod}"]`).click();
    cy.contains("Next").click({ force: true });
}