// import { Action } from 'redux-actions';
import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../actions/constants';
import { CatalogService } from '../../services/CatalogService';
import { setWomenCatalogAction } from '../actions';

export function* getWomenCatalogSaga() {
  try {
    const data: { data: any } = yield call(() =>
      CatalogService.getWomenCatalogItems()
    );
    console.log('data', { data });
    yield put(setWomenCatalogAction(data?.data));
  } catch (e) {
    console.log({ e });
  }
}

export function* womenCatalogSaga() {
  yield takeEvery(ACTIONS.GET_WOMEN_CATALOG, getWomenCatalogSaga);
}
