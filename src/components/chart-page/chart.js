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
      chartData: {
        labels: ['Laminate', 'Hardwoods', 'Carpet', 'Other'],
        datasets: [{
          label: 'Floor Type',
          data: [
            0,
            0,
            0,
            0,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
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
    };
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  componentWillMount() {
    this.props.customerGetAll();
    this.props.reportGetAll();
    console.log(this.state);
  }
  handleDoubleClick() {
    let Laminate = 0;
    let Hardwood = 0;
    let Carpet = 0;
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
      } else {
        Other ++;
      }
    }
    this.setState({
      chartData: {
        labels: ['Laminate', 'Hardwoods', 'Carpet', 'Other'],
        datasets: [{
          label: 'Floor Type',
          data: [
            Laminate,
            Hardwood,
            Carpet,
            Other,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
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
    });

  }

  render() {
    return (
      <div onDoubleClick={this.handleDoubleClick}>
        <Bar
          data={this.state.chartData}
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
