import { ICard } from "interfaces";

import { checkIsGreaterOneRank } from "./checkIsGreaterOneRank";

export const checkIsSequence = (cards: ICard[]) => {
    const { isSequence } = cards.reduce(
        (acc, curr) => {
            const isGreater = acc?.prevCard
                ? checkIsGreaterOneRank(acc.prevCard, curr)
                : true;

            return {
                isSequence: acc.isSequence && isGreater,
                prevCard: curr,
            };
        },
        {
            isSequence: true,
            prevCard: null,
        }
    );

    return isSequence;
};
