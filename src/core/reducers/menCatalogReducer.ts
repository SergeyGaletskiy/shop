import { IClothingItem } from './../types/catalog';
import { setMenCatalogAction } from './../actions/';
import { ActionType, createReducer } from 'typesafe-actions';

export interface IMenCatalogState {
  menClothingItems: IClothingItem[] | null;
}

const defaultState: IMenCatalogState = {
  menClothingItems: null,
};

const actions = {
  setMenCatalogAction,
};

export const menCatalogReducer = createReducer<
  IMenCatalogState,
  ActionType<typeof actions>
>(defaultState).handleAction(
  setMenCatalogAction,
  (state, { payload: menClothingItems }) => ({
    ...state,
    menClothingItems,
  })
);
