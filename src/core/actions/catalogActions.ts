import { IClothingItem } from './../types/catalog';
import { createAction } from 'typesafe-actions';
import { ACTIONS } from './constants';

export const setCatalogAction = createAction(ACTIONS.SET_CATALOG)<
  IClothingItem[] | null
>();
export const getCatalogAction = createAction(ACTIONS.GET_CATALOG)();

export const setMenCatalogAction = createAction(ACTIONS.SET_MEN_CATALOG)<
  IClothingItem[] | null
>();
export const getMenCatalogAction = createAction(ACTIONS.GET_MEN_CATALOG)();

export const setWomenCatalogAction = createAction(ACTIONS.SET_WOMEN_CATALOG)<
  IClothingItem[] | null
>();
export const getWomenCatalogAction = createAction(ACTIONS.GET_WOMEN_CATALOG)();

export const setJewelryCatalogAction = createAction(
  ACTIONS.SET_JEWELRY_CATALOG
)<IClothingItem[] | null>();
export const getJewelryCatalogAction = createAction(
  ACTIONS.GET_JEWELRY_CATALOG
)();

export const setElectronicsCatalogAction = createAction(
  ACTIONS.SET_ELECTRONICS_CATALOG
)<IClothingItem[] | null>();
export const getElectronicsCatalogAction = createAction(
  ACTIONS.GET_ELECTRONICS_CATALOG
)();
