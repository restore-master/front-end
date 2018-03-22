import React from 'react';
import {connect} from 'react-redux';
import {customerCreate} from '../../actions/customer-actions';
import {renderIf} from '../../lib/utils';
import CustomerForm from '../customer/customer-form/customer-form';
import CustomerItem from '../customer/customer-item/customer-item';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false,
    };
    this.handleCreate = this.handleCreate.bind(this);
  };

  handleCreate() {
    this.setState({create: !this.state.create});
  };

  render() {
    return(
      <section className='dashboard'>
        <h1>Water Loss Tracker</h1>

        <button onClick={this.handleCreate}>New Form</button>

        {renderIf(this.state.create,
          <CustomerForm
            buttonText='create'
            onComplete={this.props.customerCreate}/>

        )}

        {renderIf(this.props.customers,
          this.props.customers.map(x =>
            <CustomerItem/>
          )
        )}

      </section>
    );
  }
}

const mapStateToProps = state => ({
  customers: state.customer,
  reports: state.report,
});

const mapDispatchToProps = (dispatch) => ({
  customerCreate: customer => dispatch(customerCreate(customer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
