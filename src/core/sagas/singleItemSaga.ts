// import { Action } from 'redux-actions';
import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../actions/constants';
import { CatalogService } from '../../services/CatalogService';
import { setSingleItemAction } from '../actions';

export function* getSingleItemSaga(id: any) {
  try {
    const data: { data: any } = yield call(() =>
      CatalogService.getSingleItem(id)
    );
    console.log('data', { data });
    yield put(setSingleItemAction(data?.data));
  } catch (e) {
    console.log({ e });
  }
}

export function* singleItemSaga() {
  yield takeEvery(ACTIONS.GET_SINGLE_ITEM, getSingleItemSaga);
}
