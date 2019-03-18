import * as React from 'react';
import { HashRouter } from "react-router-dom";
import { Store } from 'redux';
import { Provider } from "react-redux";
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";

moment.locale('zh-cn');

import MyLayout from "./my-layout/MyLayout";
import './App.scss';
import { ApplicationState } from './store';

// 组件props声明
interface AppProps {
  store : Store<ApplicationState>,
  history: History
}
/**
 * 跟组件
 * 1. 使用Provider提供redux state
 * 2. 使用ConnectedRouter连接redux和router
 */
class App extends React.Component<AppProps> {

  // 渲染
  public render() {

    // 从props中获取store和history
    const { store, history } = this.props

    return (
      <Provider store={ store }>
        <ConnectedRouter history = { history }>
          <HashRouter>
            <LocaleProvider locale={ zh_CN }>
              <MyLayout />
            </LocaleProvider>
          </HashRouter>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
