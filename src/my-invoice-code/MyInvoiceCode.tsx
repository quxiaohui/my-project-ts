import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Table, Checkbox, Pagination, Upload, Button, Icon } from "antd";

import { ApplicationState } from "src/store";

import SearchBox from "./Search/Search";
import { fetchInputInfo, fetchUrl, fetchInputChange } from "../store/ms-store-code/actions";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

// 表格数据信息
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  isChecked: false,
  checked: false
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  isChecked: false,
  checked: false
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  isChecked: false,
  checked: false
}, {
  key: '4',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park',
  isChecked: false,
  checked: false
}, {
  key: '5',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park',
  isChecked: false,
  checked: false
}, {
  key: '6',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park',
  isChecked: false,
  checked: false
}, {
  key: '7',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park',
  isChecked: false,
  checked: false
}];


// ownState
interface OwnState {
  selectionsList: any[];
  selectRowKeysList: any[];
  isCheckAll: boolean;
  isShow: boolean;
  currentIndex: number;
  dataList: any[];
  selectList: any[];
}

// props from state
interface PropsFromState {
  text: string;
  urlList: any[];
  isChange: boolean;
}

// props from dispatch
interface PropsFromDispatch {
  fetchInputInfo: typeof fetchInputInfo;
  fetchUrl: typeof fetchUrl;
  fetchInputChange: typeof fetchInputChange;
}

// 合并类型
type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps;

// 声明MyInvoiceCode组件
class MyInvoiceCode extends React.Component<AllProps, OwnState> {

  // 定义状态
  public constructor(props: AllProps) {
    super(props);
    this.state = {
      selectionsList: [],
      selectRowKeysList: [],
      isCheckAll: false,
      isShow: true,
      currentIndex: -1,
      dataList: data,
      selectList: [],
    }
  }

  // 页面加载完成
  public componentDidMount () {
    // 保存url
    this.props.fetchUrl(this.props.location.pathname);
  }

  // 全选
  public onAllChange = (value: boolean) => {
    if(value) {
      data.map(item=>
        item.checked = true
        )
    } else {
      data.map(item=>
        item.checked = false
        )
    }
    this.setState({
      selectRowKeysList: value ? data.map(item => item.key) : [],
      selectionsList: value ? data : [],
      selectList:value ? data: [],
      isCheckAll: value
    }, () => {
      console.log(this.state.selectList)
    })
  }

  // 表格的复选框发生变化
  public onChange = (record: any) => {
    return (ev: any) => {
      record.checked = ev.target.checked;
      console.log(record, ev.target.checked);
      this.setState({
        dataList: record,
        selectList: ev.target.checked ? 
        this.state.selectList.indexOf(record) === -1 ?  [ ...this.state.selectList, record ] : [ ...this.state.selectList, record ]
        : [ ...this.state.selectList ].filter(item=>item.key !== record.key),
        isCheckAll: this.state.selectList.length ? true : false,
      },() => {
        console.log(this.state.selectList);
      })
    }
  }

  // 点击查询按钮
  public onClick = (text: string) => {
    this.props.fetchInputInfo(text)
  }

  // 输入框的值发生了改变
  public onInputChange = (text: boolean) => {
    this.props.fetchInputChange(text);
  }

  // 导出选中的信息
  public onExport = () => {
    console.log(this.state.selectList)
  }

  // 分页切换
  public onPageChange = (page: number, pageSiae: number) => {
    console.log(page, pageSiae);
  }

  // 渲染
  public render() {

    window.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
      const docHeight = document.documentElement.offsetHeight;
      const seeHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight :window.innerHeight;

      console.log("scrollTop" + scrollTop)
      console.log("docHeight" + docHeight)
      console.log("seeHeight" + seeHeight)
      if(scrollTop + seeHeight >= docHeight){
        console.log("到底了")
      }
    }
    
    // 表格列声明
    const columns = [
      {
      width: 100,
      title:"",
      render: (text: string, record: any, index: number) => {
        return (
          <div>
            {
              record.isChecked || record.checked ? 
              <Checkbox checked={ record.checked } onChange= { this.onChange(record) }/> : 
              <span>{ index + 1 }</span>
            }
          </div>
        )
      }
    },
    {
      title: 'Name',
      dataIndex: 'name',
      // render: (text: string, record: any) => <Link to={`/my-invoice-code/detail${record.name}`}>{text}</Link>,
      render: (text: string, record: any) => <Link to={ {pathname: "/my-invoice-code/detail", search: record.name} }>{text}</Link>,
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];

    // 复选框
    const rowSelection = {
      columnTitle:" ",
      selectedRowKeys: this.state.selectRowKeysList,
      onChange: (selectedRowKeys: any, selectedRows: any) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.setState({
          selectRowKeysList: selectedRowKeys,
          selectionsList: selectedRows,
          isCheckAll: selectedRows.length ? true : false
        });
      },
    };
    
    // 鼠标对表格的操作
    const onRow = (record: any) => {
      return {
        onMouseEnter: (event: any) => {
          record.isChecked =  true;
          this.setState({
            dataList: [ record ] 
          })
        },  // 鼠标移入行
        onMouseLeave: (event: any) => {
          // console.log(record,event);
          record.isChecked =  false;
          this.setState({
            dataList: [ record ] 
          })
        }
      }
    }

    return (
      <div style={ {backgroundColor: "#fff"} }>
        <SearchBox
        isCheckAll = { this.state.isCheckAll }
        onAllChange = { this.onAllChange }
        onClick = { this.onClick }
        text = { this.props.text }
        urlList = { this.props.urlList }
        onInputChange = { this.onInputChange }
        isChange = { this.props.isChange }
        onExport = { this.onExport }
        />
        <Table
        rowKey="key"
        rowSelection = { rowSelection }
        dataSource = { data }
        columns = { columns }
        onRow = { onRow }
        style ={ {marginTop: 30, marginBottom: 20} }
        pagination = { false }
        />
        <Pagination
        showSizeChanger = { true }
        showQuickJumper = { true }
        total={ 100 }
        onChange = { this.onPageChange }
        />

        <Upload>
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
      </div>
    )
  }
}

// 关联state到组件的props
const mapStateToProps = ({ invoiceCodeListState }: ApplicationState) => ({
  text : invoiceCodeListState.text,
  urlList: invoiceCodeListState.urlList,
  isChange: invoiceCodeListState.isChange
})

// 关联state到组件的dispatch
const mapDispatchToProps = (dispatch : Dispatch) => ({
  fetchInputInfo: (params: string) => dispatch(fetchInputInfo(params)),
  fetchUrl: (params: string) => dispatch(fetchUrl(params)),
  fetchInputChange: (params: boolean) => dispatch(fetchInputChange(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyInvoiceCode);
