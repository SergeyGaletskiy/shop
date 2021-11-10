import { ICatalogItem, ICartItem } from './../types/catalog';
import { createAction } from 'typesafe-actions';
import { ACTIONS } from './constants';

export const setCatalogAction = createAction(ACTIONS.SET_CATALOG)<
  ICatalogItem[]
>();
export const getCatalogAction = createAction(ACTIONS.GET_CATALOG)();

export const setMenCatalogAction = createAction(ACTIONS.SET_MEN_CATALOG)<
  ICatalogItem[] | null
>();
export const getMenCatalogAction = createAction(ACTIONS.GET_MEN_CATALOG)();

export const setWomenCatalogAction = createAction(ACTIONS.SET_WOMEN_CATALOG)<
  ICatalogItem[] | null
>();
export const getWomenCatalogAction = createAction(ACTIONS.GET_WOMEN_CATALOG)();

export const setJewelryCatalogAction = createAction(
  ACTIONS.SET_JEWELRY_CATALOG
)<ICatalogItem[] | null>();
export const getJewelryCatalogAction = createAction(
  ACTIONS.GET_JEWELRY_CATALOG
)();

export const setElectronicsCatalogAction = createAction(
  ACTIONS.SET_ELECTRONICS_CATALOG
)<ICatalogItem[] | null>();
export const getElectronicsCatalogAction = createAction(
  ACTIONS.GET_ELECTRONICS_CATALOG
)();

export const setSingleItemAction = createAction(
  ACTIONS.SET_SINGLE_ITEM
)<ICatalogItem | null>();
export const getSingleItemAction = createAction(ACTIONS.GET_SINGLE_ITEM)<
  string | null
>();

export const setCartAction = createAction(ACTIONS.SET_CART)<ICartItem>();
export const getCartAction = createAction(ACTIONS.GET_CART)();
export const deleteItemAction = createAction(
  ACTIONS.DELETE_ITEM
)<ICatalogItem>();
export const removeCartAction = createAction(ACTIONS.REMOVE_CART)();
export const incrementItemQuantityAction = createAction(
  ACTIONS.INCREMENT_ITEM_QUANTITY
)<ICatalogItem>();
export const decrementItemQuantityAction = createAction(
  ACTIONS.DECREMENT_ITEM_QUANTITY
)<ICatalogItem>();
