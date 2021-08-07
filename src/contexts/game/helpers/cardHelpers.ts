import { ICard, IColumn, ISource } from 'interfaces';

export const removeCardFromColumn = (source: ISource, columns: IColumn[]) => {
    const updatedSourceCards = source.column.cards.filter((sourceCard) => sourceCard.id !== source.card.id)

    const sourceColumnIndex = columns.findIndex((column) => column.id === source.column.id)

    const sourceColumn = columns[sourceColumnIndex]

    columns[sourceColumnIndex] = { ...sourceColumn, cards: updatedSourceCards };
}

export const addCardToColumn = (card: ICard, targetColumn: IColumn, columns: IColumn[]) => {
    const targetColumnIndex = columns.findIndex(column => column.id === targetColumn.id)

    columns[targetColumnIndex] = { ...targetColumn, cards: [...targetColumn.cards, card] }
}
