import { ICatalogItem } from '../types/catalog';
import { setWomenCatalogAction } from '../actions';
import { ActionType, createReducer } from 'typesafe-actions';

export interface IWomenCatalogState {
  womenClothingItems: ICatalogItem[] | null;
}

const defaultState: IWomenCatalogState = {
  womenClothingItems: null,
};

const actions = {
  setWomenCatalogAction,
};

export const womenCatalogReducer = createReducer<
  IWomenCatalogState,
  ActionType<typeof actions>
>(defaultState).handleAction(
  setWomenCatalogAction,
  (state, { payload: womenClothingItems }) => ({
    ...state,
    womenClothingItems,
  })
);
