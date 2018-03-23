import React from 'react';
import { connect } from 'react-redux';
import customerItem from '../customer/customer-item/customer-item';
import { reportGetAll, reportGet } from '../../actions/report-actions';
import { customerGetAll, customerGet } from '../../actions/customer-actions';
import { Bar } from 'react-chartjs-2';




class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData1: {
        labels: ['Laminate', 'Hardwoods', 'Carpet', 'Tile', 'Vinyl', 'Slate', 'Other'],
        datasets: [{
          label: 'Floor Type',
          data: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(44, 3, 73, 0.7)',
            'rgba(4, 239, 8, 0.7)',

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(44, 3, 73, 1)',
            'rgba(4, 239, 8, 1)',
          ],
          borderWidth: 1,
        }],
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
              },
            }],
          },
        },
      },


      chartData2: {
        labels: ['LinkedIn', 'Facebook', 'Twitter', 'Instagram', 'Snapchat', 'Other'],
        datasets: [{
          label: 'Marketing',
          data: [
            0,
            0,
            0,
            0,
            0,
            0,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(44, 3, 73, 0.7)',
            'rgba(4, 239, 8, 0.7)',

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(44, 3, 73, 1)',
            'rgba(4, 239, 8, 1)',
          ],
          borderWidth: 1,
        }],
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
                stepSize: 1,
                min: 0,
              },
              type: 'linear',
            }],
          },
        },
      },
    };
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  componentWillMount() {
    this.props.customerGetAll();
    this.props.reportGetAll();
    console.log(this.props);
  }
  handleDoubleClick() {
    let Laminate = 0;
    let Hardwood = 0;
    let Carpet = 0;
    let Tile = 0;
    let Vinyl = 0;
    let Slate = 0;
    let Other = 0;
    let reports = this.props.customer.map(customer => customer.reports[0].flooringType );
    for (let i of reports) {
      console.log(i);
      if (i === 'laminate') {
        Laminate ++ ;
      } else if(i === 'hardwood') {
        Hardwood ++;
      } else if (i === 'carpet') {
        Carpet ++;
      }else if (i === 'tile') {
        Tile ++;
      }else if (i === 'vinyl') {
        Vinyl ++;
      }else if (i === 'slate') {
        Slate ++;
      } else {
        Other ++;
      }
    }

    let LinkedIn = 0;
    let Facebook = 0;
    let Twitter = 0;
    let Instagram = 0;
    let Snapchat = 0;
    let Other2 = 0;
    reports = this.props.customer.map(customer => customer.reports[0].hearAboutUs );
    for (let i of reports) {
      console.log(i);
      if (i === 'linkedin') {
        LinkedIn ++ ;
      } else if(i === 'facebook') {
        Facebook ++;
      } else if (i === 'twitter') {
        Twitter ++;
      }else if (i === 'instagram') {
        Instagram ++;
      }else if (i === 'snapchat') {
        Snapchat ++;
      }else {
        Other2 ++;
      }
    }
    this.setState({
      chartData1: {
        labels: ['Laminate', 'Hardwoods', 'Carpet', 'Tile', 'Vinyl', 'Slate', 'Other'],
        datasets: [{
          label: 'Floor Type',
          data: [
            Laminate,
            Hardwood,
            Carpet,
            Tile,
            Vinyl,
            Slate,
            Other,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(44, 3, 73, 0.7)',
            'rgba(4, 239, 8, 0.7)',

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(44, 3, 73, 1)',
            'rgba(4, 239, 8, 1)',
          ],
          borderWidth: 1,
        }],
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
              },
            }],
          },
        },
      },


      chartData2: {
        labels: ['LinkedIn', 'Facebook', 'Twitter', 'Instagram', 'Snapchat', 'Other'],
        datasets: [{
          label: 'Marketing',
          data: [
            LinkedIn,
            Facebook,
            Twitter,
            Instagram,
            Snapchat,
            Other,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(44, 3, 73, 0.7)',
            'rgba(4, 239, 8, 0.7)',

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(44, 3, 73, 1)',
            'rgba(4, 239, 8, 1)',
          ],
          borderWidth: 1,
        }],
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
                stepSize: 1,
                min: 0,
              },
              type: 'linear',
            }],
          },
        },
      },
    });
    console.log(this.props);
  }

  render() {
    return (
      <div
        className="chart-data"
        onDoubleClick={this.handleDoubleClick}>
        <Bar
          data={this.state.chartData1}
          width={100}
          height={50}
          options={{
          }}
        />

        <Bar
          data={this.state.chartData2}
          width={100}
          height={50}
          options={{
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customer: state.customer,
  report: state.report,
});
const mapDispatchToProps = (dispatch, getState) => ({
  customerGetAll: customer => dispatch(customerGetAll(customer)),
  reportGetAll: report => dispatch(reportGetAll(report)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Chart);
