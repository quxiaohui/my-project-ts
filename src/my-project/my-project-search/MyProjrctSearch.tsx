import * as React from "react";
import { Form, Row, Col, Checkbox, Select, Input, Button, Dropdown, Icon, Drawer } from "antd";
import { FormComponentProps } from "antd/lib/form";


// 声明页面常用变量
const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;

// props from component
interface PropsFromComponent {
  checked: boolean;
  onBoxChange: (params: any) => void;
  onClick: () => void;
  rowKeysList: any[];
}

// 合并类型
type AllProps = FormComponentProps & PropsFromComponent;

class MyProjectSearch extends React.Component<AllProps> {

  // 搜索条件checkbox变化
  public onCheckBoxChange = (ev: any) => {
   this.props.onBoxChange(ev.target.checked)
  }

  // 添加商机
  public onClick = () => {
    this.props.onClick()
  }

  // 渲染页面
  public render(){

  // 声明表单元素
  const { getFieldDecorator } = this.props.form;

  //
  const box = (
    <div>12121</div>
  )

    return (
      <div>
        <Form layout="inline">
          <Row gutter={ 24 }>
            <Col span={ 1 } style={ {marginTop: 6} }>
              {/* <Checkbox checked = { this.props.checked } onChange = { this.onCheckBoxChange }/> */}
              <Checkbox checked = { this.props.rowKeysList.length || this.props.checked ? true : false } onChange = { this.onCheckBoxChange }/>
            </Col>
            <Col span = { 3 }>
              <FormItem>
                {
                  getFieldDecorator("shangji",{ initialValue: "1"})
                  (
                    <Select>
                      <Option value="1">负责和参与的商机</Option>
                    </Select>
                  )
                }
              </FormItem>
            </Col>
            <Col span={ 2 } style={ {marginTop: 4} }>
              <Dropdown overlay={ box }>
                <Button>
                  筛选
                  <Icon type="down"/>
                </Button>
              </Dropdown>
            </Col>
            <Col span={ 12 }>
              <FormItem>
                {
                  getFieldDecorator("search")
                  (
                    <Search placeholder="搜索内容" allowClear={ true }/>
                  )
                }
              </FormItem>
            </Col>
            <Col span={ 6 } style={ {marginTop: 5} }>
              < Button type="primary" onClick={ this.onClick }>
                <Icon type="plus" />
                新建商机
              </Button>
            </Col>
          </Row>
          {/* 抽屉--上面 */}
          <Drawer
          placement = "top"
          visible = { this.props.checked }
          closable = { false }
          mask = { false }
          destroyOnClose = { true }
          height = { 70 }
          style = { {marginLeft: 224, marginTop: 72} }
          >
            <Row gutter={ 24 }>
              <Col span={ 1 }>
                <Checkbox checked = { this.props.checked } onChange = { this.onCheckBoxChange } />
              </Col>
              <Col span={ 4 }>
                <Button type="primary">批量转移</Button>
              </Col>
            </Row>
          </Drawer>
        </Form>
      </div>
    )
  }
}

export default Form.create()(MyProjectSearch);
