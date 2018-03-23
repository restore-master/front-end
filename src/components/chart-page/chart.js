import React from 'react';
import { Doughnut, Bar, Pie  } from 'react-chartjs-2';

class woodChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Laminate', 'Real Hardwoods', 'Pre-Engineered Hardwoods'],
        dataSets: [
          {
            label: 'Wood',
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
        <Doughnut
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div> 
    );
  }
}

class tileChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Ceramic', 'Vinyl'],
        dataSets: [
          {
            label: 'Vinyl',
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
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div> 
    );
  }
}

class carpetChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Carpet W/ Pad', 'Glued-Down Carpet'],
        dataSets: [
          {
            label: 'Carpet',
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
        <Pie
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div> 
    );
  }
}
export default {woodChart, tileChart, carpetChart};