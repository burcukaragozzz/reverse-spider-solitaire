import { ICard } from "interfaces";

const generateId = (i: number, j: number) => {
    return i + j + (new Date()).getMilliseconds().toString() + Math.random()
}

const generateCard = (params: Pick<ICard, 'id' | 'rank'>): ICard => ({
    ...params,
    suit: "diamonds",
    isDown: true,
    isSelected: false,
    isHighlighted: false,
})

const getDisplayValue = (value: number) => {
    switch (value) {
        case 1:
            return 'A';
        case 11:
            return 'J';
        case 12:
            return 'Q';
        case 13:
            return 'K';
        default:
            return value.toString();
    }
}

export const generateCards = () => {
    try {
        const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(value => ({
            value,
            displayValue: getDisplayValue(value)
        }));

        const cards = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < ranks.length; j++) {
                const id = generateId(i, j)
                const rank = ranks[j];
                const card = generateCard({ id, rank })
                cards.push(card);
            }
        }

        return cards;
    } catch (err) {
        console.log(err.message);
    }
};
