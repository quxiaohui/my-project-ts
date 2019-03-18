import { action } from "typesafe-actions";
import { InvoiceCodeActionTypes } from "./types";

// 复选框状态
// export const fetchSelectStatus = (param: boolean) => action(InvoiceCodeActionTypes.FETCH_INVOICE_CODE_CHECLKED, param);
export const fetchSelectStatus = (param: boolean) => {
  return {
    type: InvoiceCodeActionTypes.FETCH_INVOICE_CODE_CHECLKED,
    payload: param
  }
};

// 列表序号的显示
export const fetchNumVisible = (param: boolean) => action(InvoiceCodeActionTypes.FETCH_INVOICE_NUM_CHECLKED,param);

// 输入框的值
export const fetchInputInfo = (params: string) => action(InvoiceCodeActionTypes.FETCH_INVOICE_INPUT, params);

// url
export const fetchUrl = (params: string) => action(InvoiceCodeActionTypes.FETCH_INVOICE_URL, params);

// 输入框改变的值
export const fetchInputChange = (params: boolean) => action(InvoiceCodeActionTypes.FETCH_INVOICE_INPUT_CHANGE, params);
