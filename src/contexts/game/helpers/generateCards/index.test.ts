import { generateCards } from '.';

describe('generateCards', () => {
    test('returns array of ICard', () => {
        const cards = generateCards();

        cards.forEach((card) => {
            expect(card).toEqual(
                expect.objectContaining({
                    id: expect.any(String),
                    rank: expect.any(Number),
                    isDown: expect.any(Boolean),
                    suit: expect.any(String),
                }),
            );
        });
    });
});
