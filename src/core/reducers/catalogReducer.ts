import { IClothingItem } from './../types/catalog';
import { setCatalogAction } from './../actions/';
import { ActionType, createReducer } from 'typesafe-actions';

export interface ICatalogState {
  allItems: IClothingItem[];
}

const defaultState: ICatalogState = {
  allItems: [],
};

const actions = {
  setCatalogAction,
};

export const catalogReducer = createReducer<
  ICatalogState,
  ActionType<typeof actions>
>(defaultState).handleAction(
  setCatalogAction,
  (state, { payload: allItems }) => ({
    ...state,
    allItems,
  })
);
