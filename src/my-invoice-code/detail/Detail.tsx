import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Button } from "antd";

// 合并类型
type AllProps = RouteComponentProps;

class Detail extends React.Component<AllProps> {

  // 页面加载完成
  public componentDidMount() {
    console.log(this.props)
  }

  // 点击返回按钮，返回到列表页
  public onBack = () => {
    this.props.history.push("/my-invoice-code")
  }

  public render() {

    return (
      <div>
        <Button type="primary" onClick={ this.onBack }>back</Button>
        <br/>
        { decodeURIComponent(this.props.location.search.slice(1)) }
      </div>
    )
  }
}

export default Detail;