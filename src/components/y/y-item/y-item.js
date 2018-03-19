import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import YForm from '../y-form/y-form';
import {yUpdate} from '../../../actions/y-actions';
import {yDelete} from '../../../actions/y-actions';


class YItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.y;
    this.state.editing = false;

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
  };

  handleDelete() {
    this.props.yDelete(this.state);
  };

  handleEditing() {
    this.setState({editing: !this.state.editing});
  };

  render() {
    return (
      <div
        className='y-item'
        key={this.props.y.id}
        onDoubleClick={this.handleEditing}>
        <p>Source: {this.props.y.source}</p>
        <p>Upper-Rooms: {this.props.y.upperRooms}</p>
        <p>Lower-Rooms: {this.props.y.lowerRooms}</p>
        <button onClick={this.handleDelete}>delete</button>
        {renderIf(this.state.editing,
          <YForm
            y={this.state}
            buttonText='update'
            onComplete={this.props.yUpdate} />
        )}
      </div>
    );
  };
}

const mapStateToProps = state => ({
  ys: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  yUpdate: y => dispatch(yUpdate(y)),
  yDelete: y => dispatch(yDelete(y)),
});

export default connect(mapStateToProps, mapDispatchToProps)(YItem);
