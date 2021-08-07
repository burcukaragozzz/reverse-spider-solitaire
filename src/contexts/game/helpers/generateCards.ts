export const generateCards = () => {
    try {
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
                    return value;
            }
        }

        const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(value => ({
            value,
            displayValue: getDisplayValue(value)
        }));

        const cards = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < ranks.length; j++) {
                cards.push({
                    rank: ranks[j],
                    suit: "diamonds",
                    isDown: true,
                    deck: i,
                    isSelected: false,
                    isHighlighted: false,
                    id: i + j + (new Date()).getMilliseconds().toString() + Math.random()
                });
            }
        }

        return cards;
    } catch (err) {
        console.log(err.message);
    }
};
