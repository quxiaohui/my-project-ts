import { combineReducers, Dispatch, AnyAction, Action } from "redux";
import { fork, all } from "redux-saga/effects";

// 开票复核列表组件
import { InvoiceListState } from "./ms-invoice/types";
import { MyProjectState } from "./ms-project/types";
import { InvoiceCodeListState } from "./ms-store-code/types";
import { InvoiceListReducer } from "./ms-invoice/reducer";
import { InvoiceCodeListReducer } from "./ms-store-code/reducer";
import { MyProjectReducer } from "./ms-project/reducers"
import InvoiceListSaga from "./ms-invoice/sagas";


// 最上一级的state
export interface ApplicationState {
  invoiceListState: InvoiceListState;
  invoiceCodeListState: InvoiceCodeListState;
  myProjectState: MyProjectState
}

// 添加属性给react组件，次属性默认传递给connect()方法
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

// 当action被调度，reducer根据名称去匹配reducer，然后更新相应的state
export const rootReducer = combineReducers<ApplicationState>({
  invoiceListState: InvoiceListReducer,
  invoiceCodeListState: InvoiceCodeListReducer,
  myProjectState: MyProjectReducer
})

// 合并saga
export function* rootSaga() {
  yield all([
    fork(InvoiceListSaga)
  ])
}