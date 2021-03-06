import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import CustomerForm from '../customer-form/customer-form';
import {customerUpdate} from '../../../actions/customer-actions';
import {customerDelete} from '../../../actions/customer-actions';
import ReportForm from '../../report/report-form/report-form';
import {reportCreate} from '../../../actions/report-actions';
import ReportItem from '../../report/report-item/report-item';

class CustomerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: this.props.customer ? this.props.customer : {},
      report: this.props.report ? this.props.customer : {},
      editing: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
  };

  handleDelete() {
    this.props.customerDelete(this.state.customer);
  };

  handleEditing() {
    this.setState({editing: !this.state.editing});
  };

  render() {
    return (
      <div
        className='customer-item'
        key={this.props.customer.id}>
        <h3 onDoubleClick={this.handleEditing}>Customer: {this.props.customer[0].name}</h3>
        <h3 onDoubleClick={this.handleEditing}>Date: {this.props.customer[0].date}</h3>
        <button onClick={this.handleDelete}>delete</button>
        {renderIf(this.state.editing,
          <CustomerForm
            customer={this.state.customer}
            buttonText='update'
            onComplete={this.props.customerUpdate}/>
        )}

        <ReportForm
          customerId={this.props.customer.id}
          buttonText='create'
          onComplete={this.props.reportCreate}/>


      </div>
    );
  };
}

const mapStateToProps = state => ({
  customer: state.customer,
  report: state.report,
});

const mapDispatchToProps = (dispatch, getState) => ({
  customerUpdate: customer => dispatch(customerUpdate(customer)),
  customerDelete: customer => dispatch(customerDelete(customer)),
  reportCreate: report => dispatch(reportCreate(report)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerItem);
