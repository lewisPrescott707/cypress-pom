
Cypress.Commands.add('login', () => { 
    cy.get("#username").click();
    cy.get("#react-select-2-option-0-0").click();
    cy.get("#password").click();
    cy.get("#react-select-3-option-0-0").click();
    cy.get("#login-btn").click();
});
