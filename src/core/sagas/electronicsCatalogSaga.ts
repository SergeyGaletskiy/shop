import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../actions/constants';
import { CatalogService } from '../../services/CatalogService';
import { setElectronicsCatalogAction } from '../actions';

export function* getElectronicsCatalogSaga() {
  try {
    const data: { data: any } = yield call(() =>
      CatalogService.getElectronicsCatalogItems()
    );
    yield put(setElectronicsCatalogAction(data?.data));
  } catch (e) {
    console.log({ e });
  }
}

export function* electronicsCatalogSaga() {
  yield takeEvery(ACTIONS.GET_ELECTRONICS_CATALOG, getElectronicsCatalogSaga);
}
