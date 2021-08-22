describe('HomePage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('Should render modal when click the button without select a team', () => {
        cy.get('button').contains('Start Game').click();

        cy.get('#modal').should(
            'contain.text',
            'Please select the suit you want to continue to start the game.',
        );
    });

    it('Should return to the game page if selected suit', () => {
        cy.get('#diamond1').click();
        cy.get('button').contains('Start Game').click();

        cy.url().should('include', 'http://localhost:3000/game');
    });

    it('should return to the rules page if rules button is clicked', () => {
        cy.get('button').contains('Rules').click();

        cy.url().should('include', 'http://localhost:3000/rules');
    });
});
