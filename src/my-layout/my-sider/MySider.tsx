import {  Menu, Layout } from "antd";
import * as React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

const { Sider } = Layout

class MySider extends React.Component<RouteComponentProps> {

  public render() {
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['']}
          style={{ height: '100%', borderRight: 0 }}
          selectedKeys={ [this.getCurrentKey(this.props.history.location.pathname)] }
        >
          <Menu.Item key="/my-invoice">
            <Link to="/my-invoice"><span>佩奇</span></Link>
          </Menu.Item>
          <Menu.Item key="/my-invoice-code">
            <Link to="/my-invoice-code"><span>乔治</span></Link>
          </Menu.Item>
          <Menu.Item key="/my-project">
            <Link to="/my-project"><span>我的项目</span></Link>
          </Menu.Item>
          <Menu.Item key="/my-list">
            <Link to="/my-list"><span>列表</span></Link>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }

   // 获取当前key
   private getCurrentKey(path: string) {
    const arr: string[] = path.split("/");
    return `/${arr[1]}`;
  }
}

export default withRouter(MySider);
