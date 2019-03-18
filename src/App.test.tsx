// import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { createBrowserHistory } from "history";
// import App from './App';
// import configureStore from "./configureStore";

it('renders without crashing', () => {
  const div = document.createElement('div');
  // 创建brower history对象，router和redux连接必须传递
  // const history = createBrowserHistory();
  // 从window对象中获取出事state
  // const initialState = (window as any).initialReduxState;
  // const store = configureStore(history, initialState)
  // ReactDOM.render(<App  store={store} history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
