import * as React from "react";
import { Layout } from "antd";
import { Switch, Route, Redirect} from "react-router-dom";

import MyInvoice from "../../my-invoice/MyInvoice";
import MyInvoiceCode from "../../my-invoice-code/MyInvoiceCode";
import MyWelcome from "../../my-welcome/MyWelcome";
import MyInvoiceEdit from "../../my-invoice/ms-invoice-edit/MsInvoiceEdit";
import MyProject from "../../my-project/MyProject";
import MyList from "../../my-list/MyList";
import Detail from "../../my-invoice-code/detail/Detail";


const {  Content } = Layout;

class MyMain extends React.Component {

  public render() {
    return (
      <Layout style={ {padding: '0 24px 24px'} }>
        <Content style={ {background: '#fff', padding: 24, overflow: "auto"} }>
          <Switch>
            <Route path="/" exact={ true } component= { MyWelcome } />
            <Route path="/my-invoice" exact={ true } component={ MyInvoice } />
            <Route path="/my-invoice/edit/:invoiceCode" exact={ true } component={ MyInvoiceEdit } />
            <Route path="/my-invoice-code" exact={ true } component={ MyInvoiceCode } />
            {/* <Route path={`/my-invoice-code/detail:name`} exact={ true } component={ Detail }/> */}
            <Route path={`/my-invoice-code/detail`} exact={ true } component={ Detail }/>
            <Route path="/my-project" exact ={ true } component={ MyProject } />
            <Route path="/my-list" exact ={ true } component={ MyList } />
            <Redirect to="/" />
          </Switch>
        </Content>
      </Layout>
    )
  }
}

export default MyMain;
