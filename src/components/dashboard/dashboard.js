import React from 'react';
import {connect} from 'react-redux';
import {CustomerCreate} from '../../actions/customer-actions';
import {renderIf} from '../../lib/utils';
import CustomerForm from '../customer/customer-form/customer-form';
import CustomerItem from '../customer/customer-item/customer-item';
import {CustomerGetAll, CustomerGet} from '../../actions/customer-actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false,
      view: false,
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleView = this.handleView.bind(this);
  };

  handleCreate() {
    this.setState({create: !this.state.create});
  };

  handleView() {
    this.setState({view: !this.state.view});
    console.log(this.props.CustomerGetAll());
    console.log(this.state);
  };

  render() {
    return(
      <section className='dashboard'>
        <h1>Water Loss Tracker</h1>

        <button onClick={this.handleCreate}>New Form</button>
        <button onClick={this.handleView}>View Forms</button>

        {renderIf(this.state.create,
          <XForm
            buttonText='create'
            onComplete={this.props.CustomerCreate}/>

        )}

        {renderIf(this.props.customers && this.state.view === false && this.state.create === true,
          this.props.customers.map(x =>
            <CustomerItem/>
          )
        )}

        {renderIf(this.state.view,
          <div>
            <h3>reports</h3>
            <p>name:</p>
          </div>
        )}


      </section>
    );
  }
}

const mapStateToProps = state => ({
  customers: state.x,
});

const mapDispatchToProps = (dispatch) => ({
  CustomerCreate: customer => dispatch(CustomerCreate(customer)),
  CustomerGetAll: customer => dispatch(CustomerGetAll(customer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
