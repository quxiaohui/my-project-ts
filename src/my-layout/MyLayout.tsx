import * as React from "react";
import {  Layout } from 'antd';

import MyHeader from './my-header/MyHeader';
import MySider from './my-sider/MySider';
import MyMain from './my-main/MyMain';

class MyLayout extends React.Component {

  // 渲染
  public render() {
    return (
      <Layout>
      {/* 头部 */}
        <MyHeader/>
        <Layout>
          {/* 侧边栏 */}
          <MySider/>
          {/* 内容 */}
          <Layout>
            <MyMain/>
            {/* { this.props.children } */}
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default MyLayout;