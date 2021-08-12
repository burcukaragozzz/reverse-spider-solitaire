import { Dispatch } from "react";
import { ICard, IColumn, ISource, ITarget } from "interfaces";

export interface IGameState {
    columns: IColumn[],
    source: ISource | null,
    target: ITarget | null,
    remainingCards: ICard[][],
    completedSequences: ICard[][],
    error?: String,
}

export interface IGame extends IGameState {
    dispatch: Dispatch<any>
    setTargetSafely: (column: IColumn) => void,
    setSourceSafely: (column: IColumn, card: ICard) => void,
    startNextTurn: VoidFunction
};

export enum GameActions {
    SET_SOURCE,
    SET_COLUMNS,
    SET_TARGET,
    SET_COLUMNS_AND_REMAINING_CARDS,
    SET_ERROR
}
