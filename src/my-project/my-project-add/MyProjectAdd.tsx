import * as React from "react";
import { Button, Form, Row, Col, Input } from "antd";
import { FormComponentProps } from "antd/lib/form";
// 声明页面常用变量
const ButtonGroup = Button.Group;

// 自定义数据
const data = ["参与人","共享人","公共标签","我的标签","附件"]

// ownState
interface OwnState {
  currentIndexList: any[];
  isShow: boolean;
}

interface PropsFromComponent {
  infoList: any[];
}

// 合并类型
type AllProps =  PropsFromComponent & FormComponentProps;

class MyProjectAdd extends React.Component<AllProps, OwnState> {

  // 定义状态
  public constructor(props: AllProps){
    super(props);
    this.state = {
      currentIndexList: [],
      isShow: true
    }
  }
  // 点击button
  public onClick = (index: number) =>{
    return () => {
      console.log(index)
      this.setState({
        currentIndexList: [ ...this.state.currentIndexList, index ],
        isShow: false
      })
      console.log(this.state.currentIndexList)
    }
  } 

  public render() {

    // 声明表单元素
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form layout="inline">
        {
          data.map((item,index) => 
          <Row key={ item }>
            <Col>
              {
                this.state.currentIndexList.indexOf(index) === -1 ? 
                null : 
                <Form.Item label={ item }>
                  {
                    getFieldDecorator("addperson")
                    (
                      <Input/>
                    )
                  }
                </Form.Item>
              }
            </Col>
          </Row>
          )
        }
          
        </Form>
        {
          data.map((item: string,index:number) => 
          <ButtonGroup key={ index }>
            {
                this.state.currentIndexList.indexOf(index) === -1 ? 
                <Button onClick={ this.onClick(index) }>{ item }</Button>
                : undefined
              }
          </ButtonGroup>
          )
        }
      </div>
    )
  }
}

export default Form.create()(MyProjectAdd);