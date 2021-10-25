import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../actions/constants';
import { CatalogService } from '../../services/CatalogService';
import { setMenCatalogAction } from '../actions';

export function* getMenCatalogSaga() {
  try {
    const data: { data: any } = yield call(() =>
      CatalogService.getMenCatalogItems()
    );
    yield put(setMenCatalogAction(data?.data));
  } catch (e) {
    console.log({ e });
  }
}

export function* menCatalogSaga() {
  yield takeEvery(ACTIONS.GET_MEN_CATALOG, getMenCatalogSaga);
}
