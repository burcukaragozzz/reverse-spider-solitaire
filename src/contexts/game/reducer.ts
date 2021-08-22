import { Reducer } from 'react';
import { Action } from 'interfaces';
import { IGameState, GameActions } from './types';

export const GameReducer: Reducer<IGameState, Action<GameActions>> = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case GameActions.START_GAME:
            return {
                ...state,
                columns: payload.columns,
                remainingCards: payload.remainingCards,
                score: 0,
                completedSequences: Array(8).fill(0),
            };
        case GameActions.SET_COLUMNS_AND_REMAINING_CARDS:
            return {
                ...state,
                columns: payload.columns,
                remainingCards: payload.remainingCards,
            };
        case GameActions.SET_SOURCE:
            return {
                ...state,
                source: payload,
            };
        case GameActions.SET_TARGET:
            return {
                ...state,
                target: payload,
            };
        case GameActions.SET_COLUMNS:
            return {
                ...state,
                columns: payload,
            };
        case GameActions.COMPLETE_SEQUENCE:
            return {
                ...state,
                ...payload,
            };
        case GameActions.SET_ERROR:
            return {
                ...state,
                error: payload,
            };
        case GameActions.SET_SUIT:
            return {
                ...state,
                suit: payload,
            };
        default:
            return state;
    }
};
