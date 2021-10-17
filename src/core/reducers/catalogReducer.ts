import { IClothingItem } from './../types/catalog';
import { setCatalogAction } from './../actions/';
import { ActionType, createReducer } from 'typesafe-actions';

export interface ICatalogState {
  clothingItems: IClothingItem[] | null;
}

const defaultState: ICatalogState = {
  clothingItems: null,
};

const actions = {
  setCatalogAction,
};

export const catalogReducer = createReducer<
  ICatalogState,
  ActionType<typeof actions>
>(defaultState).handleAction(
  setCatalogAction,
  (state, { payload: clothingItems }) => ({
    ...state,
    clothingItems,
  })
);
