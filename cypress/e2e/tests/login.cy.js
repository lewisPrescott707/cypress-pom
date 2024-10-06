import homePage from "../../pages/homePage";

it('Should login to inventory page', () => {
    cy.visit('https://bstackdemo.com/signin');
    cy.login();
    
    homePage._.username().should('have.text','demouser');
})