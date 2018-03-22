import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import CustomerForm from '../customer-form/customer-form';
import {customerUpdate} from '../../../actions/customer-actions';
import {customerDelete} from '../../../actions/customer-actions';
import ReportForm from '../../report/report-form/report-form';
import {reportCreate} from '../../../actions/report-actions';
import ReportItem from '../../report/report-item/report-item';
import * as customerActions from '../../../actions/customer-actions';
import * as reportActions from '../../../actions/report-actions';

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
        <p onDoubleClick={this.handleEditing}>Customer: {this.props.customer[0].name}</p>
        <p onDoubleClick={this.handleEditing}>date: {this.props.customer[0].date}</p>
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

// {renderIf(this.props.ys[this.props.x.id].length > 0,
//   this.props.ys[this.props.x.id].map(y => <YItem key={y.id} y={y} />)
// )}
const mapStateToProps = state => ({
  customer: state.customer,
  report: state.report,
});

const mapDispatchToProps = (dispatch, getState) => ({
  customerUpdate: customer => dispatch(customerActions.customerUpdate(customer)),
  customerDelete: customer => dispatch(customerActions.customerDelete(customer)),
  reportCreate: report => dispatch(reportActions.reportCreate(report)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerItem);
