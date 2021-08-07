import { IColumn } from "interfaces";

export const flipLastCard = (targetColumn: IColumn, columns: IColumn[]) => {

    // const targetColumnCopy = { ...targetColumn };

    // const [lastCard] = targetColumnCopy.cards.slice(-1);

    // lastCard.isDown = false;

    const updatedColumnCards = targetColumn.cards.map((card, index) => {
        const isLast = index === targetColumn.cards.length - 1;

        return isLast ? {
            ...card,
            isDown: false
        } : card
    })

    const targetColumnIndex = columns.findIndex(column => column.id === targetColumn.id)

    columns[targetColumnIndex] = { ...targetColumn, cards: updatedColumnCards };
}
