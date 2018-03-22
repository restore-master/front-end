import React from 'react';
import {connect} from 'react-redux';
import {xCreate} from '../../actions/x-actions';
import {renderIf} from '../../lib/utils';
import XForm from '../x/x-form/x-form';
import XItem from '../x/x-item/x-item';
import * as xActions from '../../actions/x-actions';

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
            onComplete={this.props.xCreate}/>

        )}

        {renderIf(this.props.customers,
          this.props.customers.map(x =>
            <XItem
              x={x}
              key={x._id}/>
          )
        )}

        {renderIf(this.state.view,
          <h3>reports</h3>
        )}


      </section>
    );
  }
}

const mapStateToProps = state => ({
  customers: state.x,
});

const mapDispatchToProps = (dispatch) => ({
  xCreate: customer => dispatch(xActions.xCreate(customer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
