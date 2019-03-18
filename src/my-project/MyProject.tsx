import * as React from "react";
import MyProjectSearch from "./my-project-search/MyProjrctSearch";
import { Table, Checkbox, Icon, Drawer } from "antd";
import { fetchCheckboxValue } from "../store/ms-project/actions";
import { connect } from "react-redux";
import { ApplicationState } from "src/store";
import { Dispatch } from "redux";
import MyProjectAdd from "./my-project-add/MyProjectAdd";
import { fetchUrl } from "../store/ms-store-code/actions";
import { RouteComponentProps } from "react-router";

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park',
}];

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];

// ownState
interface OwnState {
  filteredInfo: any;
  sortedInfo: any;
  currentIndex: number;
  selectionList: any[];
  isVisible: boolean;
  checkboxList: any[];
  rowKeysList: any[];
  checkedList: any[];
  indeterminate: boolean;
  checkAll: boolean;
  isCheckedAll: boolean;
  infoList: any[];
}

// props from state
interface PropsFromState {
  checked: boolean;
  infoList: any[];
  urlList: any[]
}

// props from dispatch
interface PropsFromDispatch {
  fetchCheckboxValue: typeof fetchCheckboxValue;
  fetchUrl : typeof fetchUrl;
}

// 合并类型
type AllProps = PropsFromDispatch & PropsFromState & RouteComponentProps;

class MyProject extends React.Component<AllProps, OwnState> {

  // 定义状态
  public constructor(props: AllProps){
    super(props);
    this.state= {
      filteredInfo: null,
      sortedInfo: null,
      currentIndex: -1,
      selectionList: [],
      isVisible: false,
      checkboxList: [],
      rowKeysList: [],
      checkedList: [],
      indeterminate: true,
      checkAll: false,
      isCheckedAll: false,
      infoList: [],
    }
  }

  // 页面加载完成
  public componentDidMount() {
    this.props.fetchCheckboxValue(false);

    this.props.fetchUrl(this.props.location.pathname);
    console.log(this.props.urlList)
  }

  // 表格change 
  public handleChange = (pagination: any, filters: any, sorter: any) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  // search中的复选框的值发生了改变
  public onBoxChange = (checked: boolean) => {
    this.props.fetchCheckboxValue(checked);
  }

  // 表格的checkbox的值发生变化
  public onChange = (record: any) => {
    return (ev:any) => {
      this.setState({
        isCheckedAll: record.length ? true : false,
        infoList: record
      })
      console.log(ev)
    }
  }

  // 添加商机
  public onClick = () => {
    this.setState({
      isVisible: true,
    })
  };

  // 关闭添加商机的抽屉
  public onClose = () => {
    this.setState({
      isVisible: false,
    })
  }

  public onChange1 = (checkedList: any) => {
    console.log(checkedList)
    this.setState({
      checkedList,
      checkAll: checkedList.length ? true : false
    });
  }

  public onCheckAllChange = (e: any) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      checkAll: e.target.checked,
    },()=>{
      console.log(this.state.checkedList)
    });
  }



  //
  public Change = (ev: any) => {
    this.setState({
      isCheckedAll: ev.target.checked,
      infoList: ev.target.checked ? data : []
    },() => {
      console.log(this.state.infoList)
    })
  }

  // 渲染页面
  public render(){

    // 添加商机头部
    const title = (
      <div>
        <h1>商机</h1>
      </div>
    )

    // 声明列
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title:"",
      width: 100,
      render : (text: string, record: any, index: number) => {
        // console.log(text,record,index)
        return (
          <div>
            <Checkbox checked={ this.state.infoList.length && this.state.isCheckedAll ? true : false } onChange={ this.onChange(record) } />
          </div>
        )
      }
    },{
      title: "",
      render: (text: string, record: any, index: number) => {
        return (
         <div>
           <Icon type="flag" style={ {marginRight: 10, color: "green"} } />
           { 
             this.state.currentIndex === index + 1 || this.state.infoList.length === data.length ? 
             <Checkbox checked={ (this.state.infoList.length || this.state.isCheckedAll) ? true : false } onChange={ this.onChange } />
             : index + 1
           }
         </div>
        )
      },
      onCell: (record: any) => {
        return {
          onMouseEnter: () => {
            // 显示复选框
            this.setState({
              currentIndex: Number(record.key)
            })
          },  // 鼠标移入行
          onMouseLeave: () => {
            // 显示序号
            this.setState({
              currentIndex: -1
            })
          },  // 鼠标移出行
        }
      },
      width: 50
    }, {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      filteredValue: filteredInfo.name || null,
      onFilter: (value: any, record: any) => record.name.includes(value),
      sorter: (a: any, b: any) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 100,
      sorter: (a: any, b: any) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 150,
      filteredValue: filteredInfo.address || null,
      onFilter: (value: any, record: any) => record.address.includes(value),
      sorter: (a: any, b: any) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
    }];

    // 表格的复选框
    const rowSelection = {
      selectedRowKeys: this.state.rowKeysList,
      onChange: (selectedRowKeys: any, selectedRows: any) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.setState({
          rowKeysList: selectedRowKeys
        });
        console.log(this.state.rowKeysList);
      },
    };

    return (
      <div>
        <MyProjectSearch
        checked={ this.props.checked }
        onBoxChange = { this.onBoxChange }
        onClick = { this.onClick }
        rowKeysList = { this.state.rowKeysList }
        />

        <Checkbox checked = { this.state.isCheckedAll } onChange = { this.Change }/>
        
        {/* 表格 */}
        <Table
        rowKey="key"
        rowSelection={ rowSelection }
        columns={ columns }
        dataSource={ data }
        style ={ {marginTop: 30} }
        onChange={ this.handleChange }
        />

        <Drawer visible={ this.state.isVisible} onClose = { this.onClose } width = { 700 } title={ title }>
          <MyProjectAdd infoList={ this.props.infoList }/>
        </Drawer>
        
        
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
          </div>
          <br />
          <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange1} />
      </div>
    )
  }
}

// 关联state到组件的props
const mapStateToProps = ({ myProjectState, invoiceCodeListState }: ApplicationState) => ({
  checked: myProjectState.checked,
  urlList: invoiceCodeListState.urlList
});

// 关联dispatch到组件的props
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCheckboxValue: (params: boolean) => dispatch(fetchCheckboxValue(params)),
  fetchUrl: (params: string) => dispatch(fetchUrl(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProject);