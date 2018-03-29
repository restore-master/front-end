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
    return(
      <div className="report-tracker">
        <h1>Water Loss Tracker</h1>
        <p>Double Click the report for more details!</p>

        {renderIf(this.props.customer,
          this.props.customer.map(customer =>
            <CustomerReportItem
              className="customer-report-item"
              customer={customer}
              key={customer._id}/>)
        )}
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
