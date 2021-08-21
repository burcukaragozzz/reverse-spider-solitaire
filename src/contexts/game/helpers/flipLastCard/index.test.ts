import { IColumn } from 'interfaces';
import { flipLastCard } from '.';

describe('flipLastCard', () => {
    test('Flips last remaining card from source column', () => {
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

        flipLastCard(2, allColumns);

        const targetColumn = allColumns[1];

        expect(targetColumn.cards[1].isDown).toEqual(false);
    });
});
