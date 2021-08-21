import { mockData } from 'test/mockData';
import { checkIsSequence } from '.';

describe('checkIsSequence', () => {
    const { allColumns } = mockData;

    test('returns true if all cards are a sequence', () => {
        const cards = allColumns[2].cards;

        const result = checkIsSequence(cards);

        expect(result).toBe(true);
    });

    test('returns false if all cards are not a sequence', () => {
        const cards = allColumns[0].cards;

        const result = checkIsSequence(cards);

        expect(result).toBe(false);
    });
});
