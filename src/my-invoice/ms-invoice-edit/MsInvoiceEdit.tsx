import * as React from "react";
import { Button, Form, Input, Row, Card, Checkbox } from "antd";
import { FormComponentProps } from "antd/lib/form";
import CheckboxGroup from "antd/lib/checkbox/Group";

interface StateOwn {
  name: 'xixixixi'
}

// 合并类型
type AllProps = StateOwn & FormComponentProps;


// 声明页面常用变量
const FormItem = Form.Item;
class MsInvoiceEdit extends React.Component<AllProps> {

  public componentDidMount() {
    console.log(this.props)
  }

  // 返回
  public onClick() {
    // this.props.history.push({pathname});
    console.log(this)
  }

  public render() {

    // 获取表单的value值
    const { getFieldDecorator } = this.props.form;

    // 声明复选框显示信息
    const plainOptions = ['Apple', 'Pear', 'Orange'];

    return (
      <div>
        { this.props.name }
        121212
        <Button type="primary" onClick = { this.onClick }>back</Button>
        <Form layout="inline">
          <Row>
            <FormItem label= "用户名">
              {
                getFieldDecorator("userName", {
                  initialValue: "",
                  rules: [{required: true, message: "请输入用户名"}]
                })(
                  <Input placeholder="请输入用户名"/>
                )
              }
            </FormItem>
          </Row>
          <Row>
            <FormItem label="密码">
              {
                getFieldDecorator("password", {
                  rules: [{required: true, message: "请输入密码"}]
                })(
                  <Input placeholder="请输入密码"/>
                )
              }
            </FormItem>
          </Row>
        </Form>
        <Card type="inner" title="个性服务平台" extra={<a href="#">More</a>}>
          <Checkbox>餐厅服务 </Checkbox>
          <br/><br/>
          <CheckboxGroup options={ plainOptions } style={ {marginLeft: 20} }/>
          <br/><br/>
          <Checkbox>餐厅服务 </Checkbox>
          <br/><br/>
          <CheckboxGroup options={ plainOptions } style={ {marginLeft: 20} }/>
          <br/><br/>
          <Checkbox>餐厅服务 </Checkbox>
          <br/><br/>
          <CheckboxGroup options={ plainOptions } style={ {marginLeft: 20} }/>
          <br/><br/>
          <Checkbox>餐厅服务 </Checkbox>
          <br/><br/>
          <CheckboxGroup options={ plainOptions } style={ {marginLeft: 20} }/>
        </Card>
      </div>
    )
  }
}

export default Form.create()(MsInvoiceEdit);
