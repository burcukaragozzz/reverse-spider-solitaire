import { ICard } from 'interfaces';

/**
 * Check the target card is one rank less than the source card.
 * @param card Target card
 * @param comparee Source card
 */

export const checkIsLessOneRank = (card: ICard, comparee: ICard) => {
    return comparee.rank - card.rank === 1;
};
