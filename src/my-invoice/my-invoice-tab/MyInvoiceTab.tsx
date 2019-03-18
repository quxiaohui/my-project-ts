import * as React from "react";
import { Tabs } from 'antd';

import MyInvoiceWait from "../my-invoice-wait/MyInvoiceWait";
import MsInvoiceCharts from "../ms-invoice-charts/MsInvoiceCharts";
import MsInvoiceG2Charts from "../ms-invoice-g2-charts/MsInvoiceG2Charts";
import "./MyInvoiceTab.scss";


// 声明页面常用变量
const TabPane = Tabs.TabPane;

class MyInvoiceSearch extends React.Component {
  
  // 渲染
  public render() {
    return (
      <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1"><MyInvoiceWait /></TabPane>
      <TabPane tab="Tab 2" key="2"><MsInvoiceCharts /></TabPane>
      <TabPane tab="Tab 3" key="3"><MsInvoiceG2Charts /></TabPane>
    </Tabs>
    )
  }
   
}

export default MyInvoiceSearch;