import { ICard } from 'interfaces';

export const checkIsLessOneRank = (card: ICard, comparee: ICard) => {
    return comparee.rank.value - card.rank.value === 1;
};
