export const openEFTModal=()=>{
    cy.contains("Fund Transfer").click({ force: true });
    cy.contains("BRI to Other").click({ force: true });
    cy.contains("Make a Transfer").click({ force: true });
}