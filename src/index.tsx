import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

// 创建browser history对象，router和redux连接必须传递
const history = createBrowserHistory();
import configureStore from "./configureStore";
// 从window对象中获取初始state
const initialState = (window as any).initialReduxState;
// 配置store

const store = configureStore(history, initialState);
// 渲染根组件，传入store和history属性
ReactDOM.render(
    <App store={store} history = { history } />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

