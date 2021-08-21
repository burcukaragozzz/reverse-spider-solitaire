import { mockData } from 'test/mockData';
import { flipLastCard } from '.';

describe('flipLastCard', () => {
    test('Flips last remaining card from source column', () => {
        const { allColumns } = mockData;

        flipLastCard(2, allColumns);

        const targetColumn = allColumns[1];

        expect(targetColumn.cards[1].isDown).toEqual(false);
    });
});
