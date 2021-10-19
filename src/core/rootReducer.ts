import { combineReducers } from 'redux';

import {
  catalogReducer,
  menCatalogReducer,
  womenCatalogReducer,
  jewelryCatalogReducer,
  electronicsCatalogReducer,
  singleItemReducer,
} from '../core/reducers';

export const rootReducer = combineReducers({
  clothingItems: catalogReducer,
  menClothingItems: menCatalogReducer,
  womenClothingItems: womenCatalogReducer,
  jewelryItems: jewelryCatalogReducer,
  electronicsItems: electronicsCatalogReducer,
  singleItem: singleItemReducer,
});
