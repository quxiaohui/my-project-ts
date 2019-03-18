import * as React from "react";
import { Switch, Route, Redirect } from "react-router";
import { Layout } from "antd";

import MyInvoiceTab from "./my-invoice-tab/MyInvoiceTab";
// import MyInvoiceEdit from "./ms-invoice-edit/MsInvoiceEdit";

const { Content } = Layout;

// router props
interface PouteProps {
  match: any
}

class MyInvoice extends React.Component<PouteProps> {

  // 渲染
  public render() {
    return (
      <Layout style={ {padding: '0 24 24'} }>
        <Content style={ {background: '#fff', padding: 0} }>
          <Switch>
            <Route path = { `${ this.props.match.path }` } exact={ true } component={ MyInvoiceTab }/>
            {/* <Route path = { `${ this.props.match.path }/edit` } exact={ true } component={ MyInvoiceEdit }/> */}
            <Redirect to = { `${ this.props.match.path }` } />
          </Switch>
        </Content>
      </Layout>
      // <MyInvoiceTab />
    )
  }
}


export default MyInvoice;
