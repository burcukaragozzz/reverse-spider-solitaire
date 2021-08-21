import { IColumn } from 'interfaces';
import { removeCardsFromColumn } from '.';

describe('removeCardsFromColumn', () => {
    test('succesfully remove selected cards from source column', () => {
        const allColumns = [
            {
                id: 1,
                cards: [
                    { rank: 1, isDown: true },
                    { rank: 3, isDown: true },
                ],
            },
            {
                id: 2,
                cards: [
                    { rank: 4, isDown: true },
                    { rank: 4, isDown: true },
                ],
            },
        ] as IColumn[];

        const sourceColumn = allColumns[0];

        const cards = sourceColumn.cards;

        removeCardsFromColumn(sourceColumn, cards, allColumns);

        expect(allColumns[0].cards.length).toBe(0);
    });
});
