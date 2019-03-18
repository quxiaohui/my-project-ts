import * as React from "react";
import { connect } from "react-redux";
import { ApplicationState } from "src/store";
import { Dispatch } from "redux";
import { Table, Pagination, } from "antd";
import { InvoiceSource, InvoiceUser, Invoice, InvoicePagination } from "src/store/ms-invoice/types";

import MyInvoiceWaitSearch from "./my-invoice-wait-search/MyInvoiceWaitSearch";
import { fetchInvoiceSourceList, fetchInvoiceUserList, fetchInvoiceList } from "../../store/ms-invoice/actions";
import { Link } from "react-router-dom";

// props from state
interface PropsFromState {
  invoiceSourceList: InvoiceSource[];
  invoiceUserList: InvoiceUser[];
  invoiceList: Invoice[];
  pagination: InvoicePagination;
}

// Props from dispatch
interface PropsFromDispatch {
  fetchInvoiceSourceList: typeof fetchInvoiceSourceList;
  fetchInvoiceUserList: typeof fetchInvoiceUserList;
  fetchInvoiceList: typeof fetchInvoiceList;
}

// 合并类型
type AllProps = PropsFromDispatch & PropsFromState;

class MyInvoiceWait extends React.Component<AllProps> {

  // 页面加载完成
  public componentDidMount() {
    // 查询财务信息
    this.props.fetchInvoiceList();
    // 初始化申请来源
    this.props.fetchInvoiceSourceList();
    // 初始化申请人员
    this.props.fetchInvoiceUserList();
  }

  // 分页
  public onPageChange = (pagination: any) => {
    console.log(pagination)
  }

  // 鼠标移入
  public onMouseOver = () => {
    console.log(111)
  }

  // 页面数据显示条数变化
  public onShowSizeChange = (current: number, size: number) => {
    console.log(current, size)
  }

  // 渲染页面
  public render() {

    // 声明表格
    const columns = [
      {
        dataIndex: 'number',
        render: () => {
          const num = 1;
          return (
            <span onMouseOver = {this.onMouseOver}>
              {num}
            </span>
          )
        }
      },
      {
        title: '开票抬头',
        dataIndex: 'invoiceID',
        width: 100,
        fixed: true
      }, {
        title: '申请批次号',
        dataIndex: 'invoiceCode',
        fixed: true,
        width: 100,
      }, {
        title: '申请来源',
        dataIndex: 'invoiceSource',
        width: 150,
      }, {
        title: '账单月',
        dataIndex: 'invoiceMonth',
        width: 150,
      }, {
        title: '发票金额',
        dataIndex: 'invoiceMoney',
        width: 150,
      }, {
        title: '申请时间',
        dataIndex: 'createTime',
        width: 150,
      }, {
        title: '申请类型',
        dataIndex: 'operateType',
        width: 150,
      }, {
        title: '审核状态',
        dataIndex: 'verifyStatus',
        width: 150,
      }, {
        title: '申请人员',
        dataIndex: 'requestUserName',
        width: 150,
      }, {
        title: '操作',
        dataIndex: 'address',
        fixed: false,
        width: 100,
        render: (text: string, record: any) => (
          <span>
            <a href="javascript:;">详情</a>
            <Link to = {`my-invoice/edit/${record.invoiceCode}`}>编辑</Link>
          </span>
        )}
    ]

    return (
      <div>
        <MyInvoiceWaitSearch 
          invoiceSourceList = { this.props.invoiceSourceList }
          invoiceUserList = { this.props.invoiceUserList }
        />
        <Table
          rowKey = "invoiceID"
          columns = { columns }
          dataSource = { this.props.invoiceList }
          pagination = { false }
          scroll = { {x:1700} }
        />

        <Pagination 
        style={ {marginTop: 10} }
        showQuickJumper={ true }
        showSizeChanger={ true }
        pageSizeOptions = { ["25", "50", "100"] }
        { ...this.props.pagination }
        onShowSizeChange={ this.onShowSizeChange }
        />
      </div>
    )
  }
}

// 关联state到组件的props
const mapStateToProps = ({ invoiceListState }: ApplicationState) => ({
  invoiceSourceList: invoiceListState.invoiceSourceList,
  invoiceUserList: invoiceListState.invoiceUserList,
  invoiceList: invoiceListState.invoiceList,
  pagination: invoiceListState.pagination,
});

// 关联dispatch到组件的props
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchInvoiceSourceList: () => dispatch(fetchInvoiceSourceList()),
  fetchInvoiceUserList: () => dispatch(fetchInvoiceUserList()),
  fetchInvoiceList: () => dispatch(fetchInvoiceList())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyInvoiceWait);
