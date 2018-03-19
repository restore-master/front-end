import React from 'react';
import {connect} from 'react-redux';
import {xCreate} from '../../actions/x-actions';
import XForm from '../x/x-form/x-form';
import XItem from '../x/x-item/x-item';

class Dashboard extends React.Component {
  render() {
    return(
      <section className='dashboard'>
        <h1>Water Loss Tracker</h1>

        <XForm
          buttonText='create'
          onComplete={this.props.xCreate}/>

        {this.props.categories ?
          this.props.categories.map(x =>
            <XItem
              x={x}
              key={x.id}/>
          )
          :
          undefined
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  ys: state.ys,
});

const mapDispatchToProps = (dispatch, getState) => ({
  xCreate: x => dispatch(xCreate(x)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
