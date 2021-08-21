import { ICard } from 'interfaces';
import { checkIsLessOneRank } from '.';

describe('checkIsLessOneRank', () => {
    const targetCard = { rank: 3, isDown: true } as ICard;

    test('Check with correct parameters that the target card is one rank less than the source card', () => {
        const sourceCard = { rank: 4, isDown: true } as ICard;

        const sonuc = checkIsLessOneRank(targetCard, sourceCard);

        expect(sonuc).toEqual(true);
    });

    test('Should return false when checked with wrong parameters', () => {
        const sourceCard = { rank: 5, isDown: true } as ICard;

        const sonuc = checkIsLessOneRank(targetCard, sourceCard);

        expect(sonuc).toEqual(false);
    });
});
