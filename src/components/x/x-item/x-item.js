import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import XForm from '../x-form/x-form';
import {xUpdate} from '../../../actions/x-actions';
import {xDelete} from '../../../actions/x-actions';
import YForm from '../../y/y-form/y-form';
import {yCreate} from '../../../actions/y-actions';
import YItem from '../../y/y-item/y-item';

class XItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: this.props.x ? this.props.x : {},
      y: this.props.y ? this.props.x : {},
      editing: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
  };

  handleDelete() {
    this.props.xDelete(this.state.x);
  };

  handleEditing() {
    this.setState({editing: !this.state.editing});
  };

  render() {
    return (
      <div
        className='x-item'
        key={this.props.x.id}>
        <p onDoubleClick={this.handleEditing}>Customer: {this.props.x.customerName}</p>
        <p onDoubleClick={this.handleEditing}>date: {this.props.x.date}</p>
        <button onClick={this.handleDelete}>delete</button>
        {renderIf(this.state.editing,
          <XForm
            x={this.state.x}
            buttonText='update'
            onComplete={this.props.xUpdate}/>
        )}

        <YForm
          xId={this.props.x.id}
          buttonText='create'
          onComplete={this.props.yCreate}/>

        /*{renderIf(this.props.ys[this.props.x.id].length > 0,
          this.props.ys[this.props.x.id].map(y => <YItem key={y.id} y={y} />)
        )}*/
      </div>
    );
  };
}

const mapStateToProps = state => ({
  ys: state.ys,
});

const mapDispatchToProps = (dispatch, getState) => ({
  xUpdate: x => dispatch(xUpdate(x)),
  xDelete: x => dispatch(xDelete(x)),
  yCreate: y => dispatch(yCreate(y)),
});

export default connect(mapStateToProps, mapDispatchToProps)(XItem);
