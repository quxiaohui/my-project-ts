import { InvoiceActionTypes, InvoiceSource, InvoiceUser } from "./types";
import { action } from "typesafe-actions";

// 查询申请来源接口
export const fetchInvoiceSourceList = () => action(InvoiceActionTypes.FETCH_INVOICE_SOURCE_LIST);
export const fetchInvoiceSourceListSuccess = (invoiceSourceList: InvoiceSource[]) => action(InvoiceActionTypes.FETCH_INVOICE_SOURCE_LIST_SUCCESSS, invoiceSourceList);
export const fetchInvoiceSourceListError = (error: string) => action(InvoiceActionTypes.FETCH_INVOICE_SOURCE_LIST_ERROR, error);

// 查询申请人员
export const fetchInvoiceUserList = () => action(InvoiceActionTypes.FETCH_INVOICE_USER_LIST);
// export const fetchInvoiceUserListSuccess = (invoiceUserList: InvoiceUser[]) => action(InvoiceActionTypes.FETCH_INVOICE_USER_LIST_SUCCESS, invoiceUserList);
export const fetchInvoiceUserListSuccess = (invoiceUserList: InvoiceUser[]) => {
  return {
    type: InvoiceActionTypes.FETCH_INVOICE_USER_LIST_SUCCESS,
    payload: invoiceUserList
  }
}
export const fetchInvoiceUserListError = (error: string) => action(InvoiceActionTypes.FETCH_INVOICE_SOURCE_LIST_ERROR, error);

// 查询列表
export const fetchInvoiceList = () => action(InvoiceActionTypes.FETCH_INVOICE_LIST);
export const fetchInvoiceListSuccess = (data: any) => action(InvoiceActionTypes.FETCH_INVOICE_LIST_SUCCESS, data)
export const fetchInvoiceListError = (error: string) => action(InvoiceActionTypes.FETCH_INVOICE_LIST_ERROR, error)