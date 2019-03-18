import { Reducer } from "redux";
import { InvoiceCodeActionTypes, InvoiceCodeListState } from "./types";

// 初始化state
const initialState: InvoiceCodeListState = {
  visible: false,
  numVisible: true,
  text: "",
  urlList: [],
  isChange: false
}

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {

    // 复选框
    case InvoiceCodeActionTypes.FETCH_INVOICE_CODE_CHECLKED : {
      return { ...state, visible: action.payload }
    }

    // 序号
    case InvoiceCodeActionTypes.FETCH_INVOICE_NUM_CHECLKED: {
      return { ...state, numVisible: action.payload }
    }

    // 输入框的值
    case InvoiceCodeActionTypes.FETCH_INVOICE_INPUT: {
      return { ...state, text: action.payload }
    }

    // url
    case InvoiceCodeActionTypes.FETCH_INVOICE_URL: {
      return { ...state, urlList: [...state.urlList, action.payload] }
    }

    // 输入框改变的值
    case InvoiceCodeActionTypes.FETCH_INVOICE_INPUT_CHANGE: {
      return { ...state, isChange: action.payload }
    }

    default : {
      return state;
    }
  }
}

export { reducer as InvoiceCodeListReducer }
