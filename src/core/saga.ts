import { all } from 'redux-saga/effects';
import {
  catalogSaga,
  menCatalogSaga,
  womenCatalogSaga,
  jewelryCatalogSaga,
  electronicsCatalogSaga,
  singleItemSaga,
} from './sagas';

export function* rootSaga() {
  try {
    yield all([
      catalogSaga(),
      menCatalogSaga(),
      womenCatalogSaga(),
      jewelryCatalogSaga(),
      electronicsCatalogSaga(),
      singleItemSaga(),
    ]);
  } catch (e) {}
}
