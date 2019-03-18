import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import fetchApi from "src/utils/fetchApi";
import { fetchInvoiceSourceListSuccess, fetchInvoiceSourceListError, fetchInvoiceUserListSuccess, fetchInvoiceUserListError, fetchInvoiceListSuccess, fetchInvoiceListError } from "./actions";
import { InvoiceActionTypes } from "./types";

// 执行查询申请来源信息
function* handleFetchInvoiceSourceList() {
  try {
    // 调用一部函数，向后台发送请求
    const res = yield call(fetchApi, "get", "data/invoiceSource.json");

    // 请求结果调度
    if (res.result === 0) {
      yield put(fetchInvoiceSourceListSuccess(res.data))
    } else {
      yield put(fetchInvoiceSourceListError(res.detail));
    }
  } catch (error) {
    const msg = error.stack!;
    yield put(fetchInvoiceSourceListError(msg));
  }
}

// 执行查询申请人员信息
function* handleFetchInvoiceUserList() {
  try {
    const res = yield call(fetchApi, "get", "data/invoiceUserList.json");

    // 请求结果调度
    if (res.result === 0) {
      yield put(fetchInvoiceUserListSuccess(res.data));
    } else {
      yield put(fetchInvoiceUserListError(res.detail));
    }
  } catch (error) {
    const msg = error.stack!;
    yield put(fetchInvoiceSourceListError(msg));
  }
}

// 查询列表信息
function* handleFetchInvoiceList() {
  try {
    const res = yield call(fetchApi, "get", "data/invoiceList.json");

    if (res.result === 0) {
      yield put(fetchInvoiceListSuccess(res.data))
    } else {
      yield put(fetchInvoiceListError(res.data))
    }
  } catch (error) {
    const msg = error.stack!;
    yield put(fetchInvoiceSourceListError(msg));
  }
}

// 监控，根据指定action类型调用saga方法
function* watchFetchInvoiceSourceList() {
  yield takeEvery(InvoiceActionTypes.FETCH_INVOICE_SOURCE_LIST, handleFetchInvoiceSourceList)
}
function* watchFetchInvoiceUserList() {
  yield takeEvery(InvoiceActionTypes.FETCH_INVOICE_USER_LIST, handleFetchInvoiceUserList)
}
function* watchFetchInvoiceList() {
  yield takeEvery(InvoiceActionTypes.FETCH_INVOICE_LIST, handleFetchInvoiceList)
}

// 合并所有saga监控
function* InvoiceListSaga() {
  yield all([
    fork(watchFetchInvoiceSourceList),
    fork(watchFetchInvoiceUserList),
    fork(watchFetchInvoiceList)
  ])
}

export default InvoiceListSaga;