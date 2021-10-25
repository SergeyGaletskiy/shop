import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../actions/constants';
import { CatalogService } from '../../services/CatalogService';
import { setJewelryCatalogAction } from '../actions';

export function* getJewelryCatalogSaga() {
  try {
    const data: { data: any } = yield call(() =>
      CatalogService.getJewelryCatalogItems()
    );
    yield put(setJewelryCatalogAction(data?.data));
  } catch (e) {
    console.log({ e });
  }
}

export function* jewelryCatalogSaga() {
  yield takeEvery(ACTIONS.GET_JEWELRY_CATALOG, getJewelryCatalogSaga);
}
