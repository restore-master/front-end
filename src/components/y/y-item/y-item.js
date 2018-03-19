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
        <p>Ceiling-Height: {this.props.y.ceilingHeight}</p>
        <p>Ceiling-Description: {this.props.y.ceilingDescription}</p>
        <p>Power/Heat: {this.props.y.powerHeat}</p>
        <p>Flooring Type: {this.props.y.flooringType}</p>
        <p>Type of Home: {this.props.y.typeOfHome}</p>
        <p>Age of Home: {this.props.y.ageofHome}</p>
        <p>Standing Water: {this.props.y.standingWater + '"'}</p>
        <p>Foundation Type: {this.props.y.basement}</p>
        <p>Crawlspace or slab: {this.props.y.crawlOrSlab}</p>
        <p>Crawl or Attic Location: {this.props.y.crawlOrAtticAccessLocation}</p>
        <p>Contents: {this.props.y.contents}</p>
        <p>Access Permission: {this.props.y.accessPermissions}</p>
        <p>Set Lockbox: {this.props.y.setLockBox}</p>
        <p>Pets or Children: {this.props.y.petsOrChildren}</p>
        <p>Special Needs: {this.props.y.specialNeeds}</p>
        <p>Allergies: {this.props.y.RespiratoryOrAllergies}</p>
        <p>Growth: {this.props.y.Growth}</p>
        <p>Odors: {this.props.y.odor}</p>
        <p>Monitors: {this.props.y.monitors}</p>
        <p>Email: {this.props.y.customerEmail}</p>
        <p>How did you Hear About us: {this.props.y.hearAboutUs}</p>
        <p>Customers Adjuster: {this.props.y.adjuster}</p>
        <p>Customers Agent: {this.props.y.customerAgent}</p>
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
