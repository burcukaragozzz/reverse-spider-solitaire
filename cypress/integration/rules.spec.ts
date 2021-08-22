describe('RulesPage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/rules');
    });

    it('should return to the home page if the back button is clicked', () => {
        cy.get('button').contains('Back Home').click();

        cy.url().should('include', 'http://localhost:3000/');
    });
});
