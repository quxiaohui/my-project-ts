// action的枚举类型
export const enum InvoiceCodeActionTypes {
  // 复选框状态
  FETCH_INVOICE_CODE_CHECLKED = "@invoiceCode/FETCH_INVOICE_CODE_CHECLKED",
  // 复选框状态
  FETCH_INVOICE_NUM_CHECLKED = "@invoiceCode/FETCH_INVOICE_NUM_CHECLKED",
  // 输入框的值
  FETCH_INVOICE_INPUT = "@invoiceCode/FETCH_INVOICE_INPUT",
  // 保存url
  FETCH_INVOICE_URL = "@invoiceCode/FETCH_INVOICE_URL",

  // 输入框的值改变了
  FETCH_INVOICE_INPUT_CHANGE = "@invoiceCode/FETCH_INVOICE_INPUT_CHANGE",


}

export interface InvoiceCodeListState {
  // 状态
  visible: boolean;
  numVisible: boolean;
  text: string;
  urlList: any[];
  isChange: boolean;
}
