import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/utils';
import CustomerItem from '../customer/customer-item/customer-item';
import CustomerReportItem from './customer-report-item/customer-report-item';
import {customerGetAll, customerGet} from '../../actions/customer-actions';
import {reportGetAll, reportGet} from '../../actions/report-actions';

class Reports extends React.Component{
  componentWillMount() {
    this.props.customerGetAll();
    this.props.reportGetAll();
  };

  render(){
    console.log('HELLO+++++========', this.props.customer);
    return(
      <div>
        <h1>Water Loss Tracker</h1>
        {renderIf(this.props.customer,
          this.props.customer.map(customer =>
            <CustomerReportItem
              className="customer-report-item"
              customer={customer}
              key={customer._id}/>)
        )}
        <p>checkout the dashboard page to create and view forms</p>
        <p>YOLO SWAGGINS</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Reports);