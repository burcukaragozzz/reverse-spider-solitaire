describe('GamePage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/game');
    });

    it('render 54 cards', () => {
        cy.get('.card').should('have.length', 54);
    });

    it('should render bold border when card is selected', () => {
        cy.get('.card').eq(5).click().should('have.css', 'border', '2px solid rgb(0, 0, 0)');
    });

    it('should remove selected styles when double-clicking on the card', () => {
        cy.get('.card').eq(5).dblclick().should('have.css', 'border', '1px solid rgb(0, 0, 0)');
    });

    it('render remaining-cards with background-image', () => {
        cy.get('.remaining-cards')
            .children()
            .should(
                'have.css',
                'background-image',
                'url("http://localhost:3000/images/card_back.png")',
            );

        cy.get('.remaining-cards').children().should('have.length', 5);
    });

    it('create 8 card holders for completed cards', () => {
        cy.get('.completed-deck-cards').children().should('have.css', 'background-image', 'none');

        cy.get('.completed-deck-cards').children().should('have.length', 8);
    });

    it('render timer successfuly', () => {
        cy.wait(5000);

        cy.get(':nth-child(2) > span').should('contain', '00:00:05');
    });

    it('should return to the home page if the back button is clicked', () => {
        cy.get('button').contains('Back Home').click();

        cy.get('#modal').should(
            'contain.text',
            'If you come back the game will be over. Are you sure want to come back?',
        );

        cy.get('button').contains('YES').click();

        cy.url().should('include', 'http://localhost:3000/');
    });
});
