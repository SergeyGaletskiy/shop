import { IClothingItem } from './../types/catalog';
import { setJewelryCatalogAction } from './../actions/';
import { ActionType, createReducer } from 'typesafe-actions';

export interface IJewelryCatalogState {
  jewelryItems: IClothingItem[] | null;
}

const defaultState: IJewelryCatalogState = {
  jewelryItems: null,
};

const actions = {
  setJewelryCatalogAction,
};

export const jewelryCatalogReducer = createReducer<
  IJewelryCatalogState,
  ActionType<typeof actions>
>(defaultState).handleAction(
  setJewelryCatalogAction,
  (state, { payload: jewelryItems }) => ({
    ...state,
    jewelryItems,
  })
);
