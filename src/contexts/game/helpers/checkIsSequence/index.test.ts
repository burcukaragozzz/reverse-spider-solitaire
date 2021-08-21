import { ICard } from 'interfaces';
import { checkIsSequence } from '.';

describe('checkIsSequence', () => {
    test('returns true if all cards are a sequence', () => {
        const cards = [
            { rank: 1, isDown: false },
            { rank: 2, isDown: false },
        ] as ICard[];

        const result = checkIsSequence(cards);

        expect(result).toBe(true);
    });

    test('returns false if all cards are not a sequence', () => {
        const cards = [
            { rank: 1, isDown: false },
            { rank: 3, isDown: false },
        ] as ICard[];

        const result = checkIsSequence(cards);

        expect(result).toBe(false);
    });
});
