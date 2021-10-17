import { IClothingItem } from './../types/catalog';
import { setElectronicsCatalogAction } from './../actions/';
import { ActionType, createReducer } from 'typesafe-actions';

export interface IElectronicsCatalogState {
  electronicsItems: IClothingItem[] | null;
}

const defaultState: IElectronicsCatalogState = {
  electronicsItems: null,
};

const actions = {
  setElectronicsCatalogAction,
};

export const electronicsCatalogReducer = createReducer<
  IElectronicsCatalogState,
  ActionType<typeof actions>
>(defaultState).handleAction(
  setElectronicsCatalogAction,
  (state, { payload: electronicsItems }) => ({
    ...state,
    electronicsItems,
  })
);
