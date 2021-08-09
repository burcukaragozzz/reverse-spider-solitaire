import { IColumn } from "interfaces";

/**
 * Flips last remaining card from source column.
 * @param targetColumn Target column
 * @param columns Copy of all columns
 */
export const flipLastCard = (targetColumn: IColumn, columns: IColumn[]) => {
    const updatedColumnCards = targetColumn.cards.map((card, index) => {
        const isLast = index === targetColumn.cards.length - 1;

        return isLast ? {
            ...card,
            isDown: false
        } : card
    })

    const targetColumnIndex = columns.findIndex(column => column.id === targetColumn.id)

    const updatedSourceColumn = { ...targetColumn, cards: updatedColumnCards };

    columns[targetColumnIndex] = updatedSourceColumn;
}
