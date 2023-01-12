export const toHistory=()=>{
    cy.contains("Fund Transfer").click({ force: true });
    cy.contains("BRI to Other").click({ force: true });
    cy.contains("Transfer History").click({ force: true });
}