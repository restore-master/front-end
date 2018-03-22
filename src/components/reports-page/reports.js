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

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState({
      view: !this.state.view,
    });
  }

  componentWillMount(){this.props.customerGetAll();};


  render(){
    console.log('HELLO+++++========', this.props.customer);
    return(
      <div>
        <h1>Water Loss Tracker</h1>
        {renderIf(this.props.customer,
          this.props.customer.map(customer =>
            <div
              onClick={this.handleClick}
              className="customer-item"
              key={customer._id}>
              <h3>Name:{customer.name}, Date: {customer.date}</h3>
              {renderIf(this.state.view,
                <p>{customer.reports[0].source}</p>
              )}

            </div>)
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
