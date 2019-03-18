import * as React from 'react';
import { Form, Row, Col, AutoComplete, Select, DatePicker, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { InvoiceSource, InvoiceUser } from 'src/store/ms-invoice/types';

// props own
interface PropsOwn extends FormComponentProps {
  invoiceSourceList: InvoiceSource[];
  invoiceUserList: InvoiceUser[];
}

// 合并类型
type AllProps = PropsOwn & FormComponentProps;

// 声明页面变量
const FormItem = Form.Item;
const Option = Select.Option;

class MyInvoiceWaitSearch extends React.Component<AllProps> {

  // 清空查询条件
  public onReset = () => {
    this.props.form.resetFields();
  }
   // 弹框
   public onClick = () => {
      console.log(121212+1);
  }

  // 渲染组件
  public render () {

    // 获得表单的值
    const { getFieldDecorator } = this.props.form;

    // 表单布局
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 }
    }

    return (
      <Form>
        <Button type="primary" onClick={this.onClick }>弹框</Button>
        <Row gutter={ 24 }>
          <Col span={ 6 }>
            <FormItem label="客户名称" { ...formItemLayout }>
              {
                getFieldDecorator("id", {
                  initialValue: "",
                  rules: [{ required: true }]
                })(
                  <AutoComplete placeholder="输入名称搜索后选择客户"/>
                )
              }
            </FormItem>
          </Col>
          <Col span={ 6 }>
            <FormItem label="全额/差额" { ...formItemLayout }>
              {
                getFieldDecorator("invoiceLimitType", {
                  initialValue: "",
                })(
                  <Select>
                    <Option value="">全部</Option>
                    <Option value="1">全额</Option>
                    <Option value="2">差额</Option>
                  </Select>
                )
              }
            </FormItem>
          </Col>
          <Col span={ 6 }>
            <FormItem label="申请来源" { ...formItemLayout }>
              {
                getFieldDecorator("invoiceSource", {
                  initialValue: ""
                })(
                  <Select>
                    <Option value="">全部</Option>
                    {
                      this.props.invoiceSourceList && this.props.invoiceSourceList.map((invoiceSource: any) => (
                        <Option value={ invoiceSource.value } key={ invoiceSource.value }>{ invoiceSource.invoiceSource }</Option>
                      ))
                    }
                  </Select>
                )
              }
            </FormItem>
          </Col>
          <Col span={ 6 }>
              <FormItem label="申请人员" { ...formItemLayout }>
                {
                  getFieldDecorator("requestUserName", {
                    initialValue: ""
                  })(
                    <Select>
                      <Option value="">全部</Option>
                      {
                        this.props.invoiceUserList && this.props.invoiceUserList.map((invoiceUser: any) => (
                          <Option key={ invoiceUser.requestUserId } value={ invoiceUser.requestUserId }>{ invoiceUser.requestUserName }</Option>
                        ))
                      }
                    </Select>
                  )
                }
              </FormItem>
          </Col>
        </Row>
        <Row gutter={ 24 }>
          <Col span={ 6 }>
            <FormItem label="账单月" { ...formItemLayout }>
              {
                getFieldDecorator("invoiceMonth")(
                  <DatePicker format="YY-MM" />
                )
              }
            </FormItem>
          </Col>
          <Col span={ 6 }>
            <FormItem label="申请时间" { ...formItemLayout }>
              {
                getFieldDecorator("rangeDate")(
                  <DatePicker.RangePicker format="YYYY-MM-DD" />
                )
              }
            </FormItem>
          </Col>
          <Col style={ {marginTop: 5} }>
            <Button type="primary" onClick={ this.onReset }>清空查询条件</Button>
            <Button type="primary" style={ {marginLeft: 10} }>查询</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default Form.create()(MyInvoiceWaitSearch);
