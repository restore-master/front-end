import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/utils';
import CustomerItem from '../customer/customer-item/customer-item';
import {customerGetAll, customerGet} from '../../actions/customer-actions';


class Reports extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      customer: this.props.customer ? this.props.customer : {},
      report: this.props.report ? this.props.report : {},
      view: false,
    };
    this.handleView = this.handleView.bind(this);
  };

  componentWillMount(){
    this.props.customerGetAll();
  }

  handleView() {
    this.setState({view: !this.state.view});
    console.log(this.props);
    console.log(this.state);
  };

  render(){
    console.log('HELLO+++++========', this.state.customer);
    return(
      <div>
        <h1>Water Loss Tracker</h1>
        <button onClick={this.handleView}>View Forms</button>
        {renderIf(this.state.view,
          <h1>{console.log(this.props.customer)}</h1>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
