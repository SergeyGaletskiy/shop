import { IClothingItem } from '../types/catalog';
import { setSingleItemAction } from '../actions';
import { ActionType, createReducer } from 'typesafe-actions';

export interface ISingleItemState {
  singleItem: IClothingItem | null;
}

const defaultState: ISingleItemState = {
  singleItem: null,
};

const actions = {
  setSingleItemAction,
};

export const singleItemReducer = createReducer<
  ISingleItemState,
  ActionType<typeof actions>
>(defaultState).handleAction(
  setSingleItemAction,
  (state, { payload: singleItem }) => ({
    ...state,
    singleItem,
  })
);
