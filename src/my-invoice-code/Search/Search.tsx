import * as React from "react";
import { Form, Checkbox, Row, Col, Input, Button } from "antd";
import { FormComponentProps } from "antd/lib/form";

// props from compoment
interface PropsFromComponent {
  isCheckAll: boolean;
  text: string;
  urlList: any[];
  isChange: boolean;
  onAllChange: (param: boolean) => void;
  onClick: (param: string) => void | null;
  onInputChange: (params: boolean) => void;
  onExport: () => void;
}

// 合并类型
type AllProps = PropsFromComponent & FormComponentProps;

class SearchBox extends React.Component<AllProps> {

  // 定义状态
  public constructor(props: AllProps) {
    super(props);
    this.state = {
      isChange: false,
    }
  }

  // 页面加载完成
  public componentDidMount () {
    // 如果是列表页保留搜索信息
    if(this.props.urlList[this.props.urlList.length-1] === "/my-list"){
      const text = this.props.form.getFieldValue("name");
      this.props.onClick(text);
    } else {
      this.props.onClick("");
    }
  }

  // 复选框的值发生了变化
  public onAllChange = (ev: any) => {
    this.props.onAllChange(ev.target.checked);
  }

  // 将选中的信息导出
  public onExport = () => {
    this.props.onExport()
  }

  // 点击查询按钮
  public onClick = () => {
    // 获取输入框的值
    const text = this.props.form.getFieldValue("name");
    this.props.onClick(text);
  }

  // 输入框的值发生了改变
  public onInputChange =  (ev: any) => {
    this.props.onClick("");
  }

  // 渲染页面
  public render() {

    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form layout="inline">
          <Row gutter={ 24 }>
            <Col span = { 2 }>
              <Form.Item>
                <Checkbox checked={ this.props.isCheckAll } onChange = { this.onAllChange }/>
              </Form.Item>
            </Col>
            <Col span={ 6 }>
              <Form.Item>
                {
                  getFieldDecorator("name",{
                    initialValue: this.props.text || ""
                  })(
                    <Input placeholder="请输入项目名称" onChange={ this.onInputChange }/>
                  )
                }
              </Form.Item>
            </Col>
            <Col span={ 4 }>
              <Button type="primary" onClick={ this.onClick }>查询</Button>
            </Col>
            <Col span={ 4 }>
              <Button type="primary" onClick={ this.onExport }>导出</Button>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

export default Form.create()(SearchBox);
