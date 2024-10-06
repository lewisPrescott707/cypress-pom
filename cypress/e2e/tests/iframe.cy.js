describe('Iframe', () => {
    it('gets the iframe body', () => {
    cy.visit('https://www.w3schools.com/html/html_iframe.asp');
    cy.get('#accept-choices').should('have.text', 'Accept all & visit the site').click();
    cy.getIframeBody()
    .find('#accept-choices').should('have.text', 'Accept all & visit the site').click();

    cy.getIframeBody()
    .find('[href="/default.asp"]').should('include.text', 'Home');
    });
});
