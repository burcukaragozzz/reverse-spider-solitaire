import { Dispatch } from "react";
import { ICard, IColumn, ISource } from "interfaces";

export interface IGameState {
    cards: ICard[],
    columns: IColumn[],
    source: ISource,
    remainingCards: ICard[],
    completedSequences: ICard[][],
}

export interface IGame extends IGameState {
    dispatch: Dispatch<any>
    setSource: (card: ICard, column?: IColumn) => void,
    moveCard: (card: ICard, column: IColumn) => void,
    startNextTurn: VoidFunction
};

export enum GameActions {
    SET_SOURCE,
    SET_COLUMNS,
    SET_COLUMNS_AND_REMAINING_CARDS
}
