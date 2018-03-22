import React from 'react';
import Doughnut from 'react-chartjs-2';

export default class Chart extends React.Component {
  render() { 
    return ( 
      <Doughnut data={chartData} options={chartOptions}/>     
    );
  }
}
//type of home
//crawl or slab
//how did you hear about us
// flooring pipe