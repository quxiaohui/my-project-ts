import * as React from "react";
import { Chart, Geom, Axis, Tooltip} from 'bizcharts';

class MsInvoiceG2Charts extends React.Component{

  public onClick = (ev: any) => {
    console.log(ev)
  }


  public render () {
    const data = [
      { genre: 'Sports', sold: 275, income: 2300 },
      { genre: 'Strategy', sold: 115, income: 667 },
      { genre: 'Action', sold: 120, income: 982 },
      { genre: 'Shooter', sold: 350, income: 5271 },
      { genre: 'Other', sold: 150, income: 3710 }
    ];
    
    // 定义度量
    const cols = {
      sold: { alias: '销售量' },
      genre: { alias: '游戏种类' }
    };
  
    return (
      <div>
        <Chart width={600} height={400} data={data} scale={cols} onPlotClick={this.onClick}>
      <Axis name="genre" />
      <Axis name="sold" />
      {/* <Legend position="top" dy={-20} /> */}
      <Tooltip />
      <Geom type="interval" position="genre*sold" color="genre" />
    </Chart>
      </div>
    )
  }
}

export default MsInvoiceG2Charts;
