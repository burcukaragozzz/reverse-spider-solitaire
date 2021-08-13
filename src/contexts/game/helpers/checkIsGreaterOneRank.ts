import { ICard } from 'interfaces';

export const checkIsGreaterOneRank = (card: ICard, comparee: ICard) => {
    return card.rank.value - comparee.rank.value === 1;
};
