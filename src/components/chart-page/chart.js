import React from 'react';
import { Doughnut, Bar, Line, Pie  } from 'react-chartjs-2';

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [],
        dataSets: [
          {
            label: '',
            data : [

            ],
            backgroundColor: [

            ],
          },
        ],
      },
    };
  }
  render() { 
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          // width={100}
          // height={50}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div> 
    );
  }
}