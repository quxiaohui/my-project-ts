// action的枚举类型
export const enum MyProjectTypes {
  // 复选框状态
  FETCH_MY_PROJECT_CHECLKED = "@invoiceCode/FETCH_MY_PROJECT_CHECLKED",
}

export interface MyProjectState {
  // 状态
  checked: boolean;
}
