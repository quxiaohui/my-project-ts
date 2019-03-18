import { Reducer } from "redux";
import { MyProjectTypes, MyProjectState } from "./types";

// 初始化state
const initialState: MyProjectState = {
  checked: false
}

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {

    // 复选框
    case MyProjectTypes.FETCH_MY_PROJECT_CHECLKED : {
      return { ...state, checked: action.payload }
    }

    default : {
      return state;
    }
  }
}

export { reducer as MyProjectReducer }
