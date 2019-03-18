// import { action } from "typesafe-actions";
import { MyProjectTypes } from "./types";

// 复选框状态
export const fetchCheckboxValue = (param: boolean) => {
  return {
    type: MyProjectTypes.FETCH_MY_PROJECT_CHECLKED,
    payload: param
  }
};

