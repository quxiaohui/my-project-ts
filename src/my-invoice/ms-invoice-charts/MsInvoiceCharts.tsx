import * as React from "react";
import { Bar, Pie, yuan, TimelineChart, ChartCard, MiniBar } from 'ant-design-pro/lib/Charts';
// import { ChartCard, MiniBar } from "ant-design-pro/lib/Charts";
import 'ant-design-pro/dist/ant-design-pro.css';

class MsInvoioceCharts extends React.Component {

  
  public onAlert = () => {
    console.log('alert')
  }


  // 页面加载完成
  public componentDidMount(){
    const bar = document.createElement("Bar");
    console.log("========================")
    console.log(bar)
    bar.click = () => {
      console.log(121212)
    }
  }

  public render() {

    const visitData = [
      {
        x: "2017-09-01",
        y: 100
      },
      {
        x: "2017-09-02",
        y: 120
      },
      {
        x: "2017-09-03",
        y: 88
      },
      {
        x: "2017-09-04",
        y: 65
      }
    ];

    // 声明图表信息(饼图)
    const salesPieData = [
      {
        x: '家用电器',
        y: 4544,
      },
      {
        x: '食用酒水',
        y: 3321,
      },
      {
        x: '个护健康',
        y: 3113,
      },
      {
        x: '服饰箱包',
        y: 2341,
      },
      {
        x: '母婴产品',
        y: 1231,
      },
      {
        x: '其他',
        y: 1231,
      },
    ];

    const span = <span
      dangerouslySetInnerHTML={{
        __html: yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))
      }}
    />

    // 声明图表信息(柱形图)
    const salesData = [];
    for (let i = 0; i < 12; i += 1) {
      salesData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200
      });
    }

    // 折线图
    const chartData = [];
    for (let i = 0; i < 20; i += 1) {
      chartData.push({
        x: (new Date().getTime()) + (1000 * 60 * 30 * i),
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10,
      });
    }

    return (
      <div>
        {/*  柱状图 */}
        <Bar 
          height = { 200 } 
          title = "销售额趋势" 
          data = { salesData } 
          color= "red"
        />

        {/* 饼图 */}
        <Pie
          hasLegend = { true }
          height = { 294 }
          title = "销售额"
          subTitle = "销售额1111"
          data = { salesPieData }
          total = { span }
          tooltip={ false }
          />

        {/* 折线图 */}
        <TimelineChart 
          height={200}
          data={chartData}
          titleMap={{ y1: '客流量', y2: '支付笔数' }}
        />

        <ChartCard
          title="支付笔数"
          total="6,500"
          contentHeight={46}
        >
          <MiniBar height={46} data={visitData} />
        </ChartCard>
      </div>
    )
  }
}

export default MsInvoioceCharts;