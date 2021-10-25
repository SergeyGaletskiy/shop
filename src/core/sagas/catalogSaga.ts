import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../actions/constants';
import { CatalogService } from '../../services/CatalogService';
import { setCatalogAction } from '../actions';

export function* getCatalogSaga() {
  try {
    const data: { data: any } = yield call(() =>
      CatalogService.getCatalogItems()
    );
    yield put(setCatalogAction(data?.data));
  } catch (e) {
    console.log({ e });
  }
}

export function* catalogSaga() {
  yield takeEvery(ACTIONS.GET_CATALOG, getCatalogSaga);
}
