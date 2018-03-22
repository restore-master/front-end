import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/utils';
import CustomerItem from '../customer/customer-item/customer-item';
import {customerGetAll, customerGet} from '../../actions/customer-actions';

class Reports extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      view: false,
    };
    this.handleView = this.handleView.bind(this);
  };

  handleView() {
    this.setState({view: !this.state.view});
    console.log(this.props.customerGetAll());
    console.log(this.state);
  };

  render(){
    return(
      <div>
        <button onClick={this.handleView}>View Forms</button>
        <h1>Water Loss Tracker</h1>
        <p>checkout the dashboard page to create and view forms</p>
        <p>YOLO SWAGGINS</p>
      </div>
    );

  }
}

const mapStateToProps = state => ({
  customers: state.customer,
  reports: state.report,
});

const mapDispatchToProps = (dispatch) => ({
  customerGetAll: customer => dispatch(customerGetAll(customer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
