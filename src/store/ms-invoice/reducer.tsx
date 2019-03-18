import { Reducer } from "redux";
import { InvoiceListState, InvoiceActionTypes } from "./types";

// 初始化state
const initialState: InvoiceListState =  {
  invoiceSourceList: [],
  invoiceUserList: [],
  invoiceList: [],
  pagination: {
    pageSize: 25,
    current: 1,
    total: 0
  }
}

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {

    // 获取申请来源
    case InvoiceActionTypes.FETCH_INVOICE_SOURCE_LIST: {
      return { ...state }
    };
    case InvoiceActionTypes.FETCH_INVOICE_SOURCE_LIST_SUCCESSS: {
      return {
        ...state,
        invoiceSourceList: action.payload.records
      }
    };
    case InvoiceActionTypes.FETCH_INVOICE_SOURCE_LIST_ERROR: {
      return {
        ...state,
        invoiceSourceList: action.payload.records
      }
    };

    // 获取申请人员
    case InvoiceActionTypes.FETCH_INVOICE_USER_LIST: {
      return { ...state }
    };
    case InvoiceActionTypes.FETCH_INVOICE_USER_LIST_SUCCESS: {
      return { 
        ...state,
        invoiceUserList: action.payload.records
      };
    };
    case InvoiceActionTypes.FETCH_INVOICE_USER_LIST_ERROR: {
      return { 
        ...state,
        invoiceUserList: action.payload
      };
    };

    // 获取列表信息
    case InvoiceActionTypes.FETCH_INVOICE_LIST: {
      return { ...state };
    }
    case InvoiceActionTypes.FETCH_INVOICE_LIST_SUCCESS: {
      return {
        ...state,
        invoiceList: action.payload.records,
        pagination: { pageSize: action.payload.pageSize, current: action.payload.pageIndex, total: action.payload.totalCount, }
      }
    }
    case InvoiceActionTypes.FETCH_INVOICE_LIST_ERROR: {
      return {
        ...state,
        invoiceList: action.payload.records
      }
    }

    default: {
      return state;
    }
  }
}

export { reducer as InvoiceListReducer }