// 申请来源
export interface InvoiceSource {
  value: number;
  invoiceSource: string;
}

// 申请人员
export interface InvoiceUser {
  requestUserId: number;
  requestUserName: string;
}

// 分页
export interface InvoicePagination {
  total: number;
  pageSize: number;
  current: number
}

// 列表信息
export interface Invoice {
  invoiceID: number;    // 发票申请ID，主键
  invoiceCode: string;  // 申请编号
  invoiceType: number;  // 发票类型，0 增值税专用发票、2 普通增值税发票
  invoiceSource: number; // 请求来源
  invoiceMonth: string;  // 开票月份
  requestUserName: string; // 申请人
}

// action枚举类型
export const enum InvoiceActionTypes {
  // 申请来源
  FETCH_INVOICE_SOURCE_LIST = "@invoice/FETCH_INVOICE_SOURCE_LIST",
  FETCH_INVOICE_SOURCE_LIST_SUCCESSS = "@invoice/FETCH_INVOICE_SOURCE_LIST_SUCCESS",
  FETCH_INVOICE_SOURCE_LIST_ERROR = "@invoice/FETCH_INVOICE_SOURCE_LIST_Error",

  // 申请人员
  FETCH_INVOICE_USER_LIST = "@invoice/FETCH_INVOICE_USER_LIST",
  FETCH_INVOICE_USER_LIST_SUCCESS = "@invoice/FETCH_INVOICE_USER_LIST_SUCCESS",
  FETCH_INVOICE_USER_LIST_ERROR = "@invoice/FETCH_INVOICE_USER_LIST_ERROR",

  // 列表信息
  FETCH_INVOICE_LIST = "@invoice/FETCH_INVOICE_LIST",
  FETCH_INVOICE_LIST_SUCCESS = "@invoice/FETCH_INVOICE_LIST_SUCCESS",
  FETCH_INVOICE_LIST_ERROR = "@invoice/FETCH_INVOICE_LIST_ERROR",

}

// invoice组件的state
export interface InvoiceListState {
  // 申请来源
  readonly invoiceSourceList: InvoiceSource[];  
  // 申请人员 
  readonly invoiceUserList: InvoiceUser[];
  // 列表信息
  readonly invoiceList: Invoice[];
  // 分页
  readonly pagination: InvoicePagination;
}
