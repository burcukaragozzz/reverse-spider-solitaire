import { ICard, IColumn, } from 'interfaces';

/**
 * Adds selected card into the target column.
 * @param card Selected card to move
 * @param targetColumn Target column
 * @param columns Copy of all columns
 */
export const addCardToColumn = (card: ICard, targetColumn: IColumn, columns: IColumn[]) => {
    const targetColumnIndex = columns.findIndex(column => column.id === targetColumn.id)

    const updatedTargetColumn = {
        ...targetColumn,
        cards: [
            ...targetColumn.cards,
            card
        ]
    };

    columns[targetColumnIndex] = updatedTargetColumn
}
