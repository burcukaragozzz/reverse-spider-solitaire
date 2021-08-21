import { ICard } from 'interfaces';

import { checkIsLessOneRank } from '../checkIsLessOneRank';

/**
 * Check selected cards are a sequence.
 * @param cards Source card
 */

export const checkIsSequence = (cards: ICard[]) => {
    const { isSequence } = cards.reduce(
        (acc, curr) => {
            const isSmall = acc?.prevCard ? checkIsLessOneRank(acc.prevCard, curr) : true;

            return {
                isSequence: acc.isSequence && isSmall,
                prevCard: curr,
            };
        },
        {
            isSequence: true,
            prevCard: null,
        },
    );

    return isSequence;
};
