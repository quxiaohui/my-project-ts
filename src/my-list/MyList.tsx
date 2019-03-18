import * as React from "react";
import { Input, List, Pagination } from "antd";
import "./MyList.scss";
import { fetchUrl } from "../store/ms-store-code/actions"

import { Chart, Tooltip, Geom, Guide, Legend, Label } from 'bizcharts';
import { ApplicationState } from "src/store";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";

const data1 = [{
  gender: 'male',
  path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
  value: 50,
}];

const scale = {
  value: {
    min: 0,
    max: 100,
  },
};

// 列表信息
const data = [{
  id: 1,
  info:"悦达889商城促销导购我是超长1212121212",
  isFinish: 1
  }, {
    id: 2,
    info:"xixi",
    isFinish: 0
  }, {
    id: 3,
    info:"xixi",
    isFinish: 1
  }, {
    id: 1,
    info:"悦达889商城促销导购我是超长1212121212",
    isFinish: 1
  }, {
    id: 2,
    info:"xixi",
    isFinish: 0
  }, {
    id: 3,
    info:"xixi",
    isFinish: 1
  }, {
    id: 1,
    info:"悦达889商城促销导购我是超长1212121212",
    isFinish: 1
  }, {
    id: 2,
    info:"xixi",
    isFinish: 0
  }, {
    id: 3,
    info:"xixi",
    isFinish: 1
  }, {
    id: 1,
    info:"悦达889商城促销导购我是超长1212121212",
    isFinish: 1
  }, {
    id: 2,
    info:"xixi",
    isFinish: 0
  }, {
    id: 3,
    info:"xixi",
    isFinish: 1
  }, {
    id: 1,
    info:"悦达889商城促销导购我是超长1212121212",
    isFinish: 1
  }, {
    id: 1,
    info:"悦达889商城促销导购我是超长1212121212",
    isFinish: 1
  }, {
    id: 2,
    info:"xixi",
    isFinish: 0
  }, {
    id: 3,
    info:"xixi",
    isFinish: 1
  }, {
    id: 1,
    info:"悦达889商城促销导购我是超长1212121212",
    isFinish: 1
  },
];

// 声明页面常用变量
const Search = Input.Search

// props from dispatch
 interface PropsFromDispatch {
   fetchUrl: typeof fetchUrl,
 }

 // props from state
 interface PropsFromState {
   urlList: any[]
 }

 // ownState 
 interface OwnState {
   scrollHeight: 0,

 }

// 合并类型
type AllProps = PropsFromDispatch & PropsFromState & RouteComponentProps;

class MyList extends React.Component<AllProps, OwnState> {

  // 获取列表数据
  public getListData = (item: any) => {
    return (
      <List.Item key={item.id} style={ {paddingLeft: 12, paddingRight: 12, height: 47} }>
        <a href="#" className="slide-list-info-content">{ item.info }</a>
        <div className={ item.isFinish === 1 ? "slide-list-info-FinButton" : "slide-list-info-IngButton" }>{ item.isFinish === 1 ? "已完成" : "进行中" }</div>
      </List.Item>
    )
  }

  // 数据挂载完成
  public componentDidMount = () => {
    // 获取页面的url
    this.props.fetchUrl(this.props.location.pathname);
    console.log(this.props.urlList)

    window.addEventListener('scroll', this.handler);
    this.handler();

  }

  public handler = () => {
   console.log(111)
  }

  // 渲染页面
  public render () {

    // 页面滚动
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

    const node = (text: string, item: any, index: number)=>{
      // text 为每条记录 x 属性的值
      // item 为映射后的每条数据记录，是一个对象，可以从里面获取你想要的数据信息
      // index 为每条记录的索引
      // 自定义 html 模板
      console.log(text, item, index)
      return '<div class="order-statistics-chart-title">'+ text +'</div><div class="order-statistics-chart-data"><span class="order-statistics-chart-percent">'+ item.point.value +'</span><spanclass="order-statistics-chart-mark">%</span></div>';
    }

    return (
      <div id="box">
        {/* 接单统计 */}
        <div className="order-statistics">
          <div className="order-statistics-header">
            <span className="order-statistics-header-title">接单统计</span>
            <a href="#" className="order-statistics-header-export">导出</a>
          </div>
          {/* 图 */}
          <Chart height={ 246 } data={ data1 } scale={ scale } forceFit = { true } padding={ [13, 72 ,53, 71] }>
            <Tooltip />
            <Geom
              type="interval"
              position="gender*value"
              color={['gender', '#1890FF']}  // 颜色渐变写法
              // color={['value', '#8BC7FF-#1890FF']}
              shape="liquid-fill-gauge"
              size ={ 180 }
              style={{
                lineWidth: 2,
                color: "#1890FF"
              }}
            >
              <Label 
              content="当前已接单"  
              textStyle={{
                textAlign: "center", // 文本对齐方向
              }}
              htmlTemplate={ node }
              />
            </Geom>
            <Guide>
              <Legend name="value" />
            </Guide>
          </Chart>
        </div>

         {/* 侧边栏 */}
         <div className="slide-list">
          {/* 搜索框 */}
          <div className="slide-list-search">
            <Search placeholder="项目名称" style={ {width: 256, height: 32} }/>
          </div>
          {/* 列表 */}
          <main className="slide-list-info">
            <List
            dataSource={ data }
            renderItem={ this.getListData }
            />
          </main>
          {/* 底部分页 */}
          <footer className="slide-list-footer">
            <Pagination simple={ true } defaultCurrent={ 2 } total={ 50 } />
          </footer>
        </div>
      </div>
      
    )
  }
}

// 关联state到组件的props
const mapStateToProps = ({ invoiceCodeListState }: ApplicationState) => ({
  urlList: invoiceCodeListState.urlList
});

// 关联dispatch到组件的props
const mapDispatchToProps = (dispatch: Dispatch)=> ({
  fetchUrl: (params: string) => dispatch(fetchUrl(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
