import { Store, createStore, applyMiddleware } from "redux";
// 引入redux-sage中间件来控制异步操作
import createSagaMiddleware from "redux-saga";
// `react-router-redux` 被放弃了, 所有这里我们使用 `connected-react-router`.
// 它提供了Redux中间件来连接 `react-router` 实例.
import { connectRouter, routerMiddleware } from "connected-react-router";
// 引入 redux-devtools-extension 可视化工具，请安装 Redux Devtools.
import { composeWithDevTools } from "redux-devtools-extension";
// 引入日志中间件记录日志
import logger from "redux-logger";
// 使用react-router需传递History类型
import { History } from "history"

// 导入顶级的state，以及组合后的reducer和sage
import { ApplicationState, rootReducer, rootSaga } from "./store";

/**
 * store配置
 * store是用来联系我们的action，reducer，saga
 *
 * @export
 * @param {History} history
 * @param {ApplicationState} initialState
 * @returns {Store<ApplicationState>}
 */
export default function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  // 创建devTools实例
  const composeEnhancers = composeWithDevTools({});
  // 创建redux-saga实例
  const sagaMiddleware = createSagaMiddleware();

  // 创建store，传递组合后的reducer和saga，以及初始state
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware, logger))
  );

  // 启动根saga
  sagaMiddleware.run(rootSaga);

  // 返回store
  return store;
}
