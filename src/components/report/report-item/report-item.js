import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import ReportForm from '../report-form/report-form';
import {reportUpdate} from '../../../actions/report-actions';
import {reportDelete} from '../../../actions/report-actions';


class ReportItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.report;
    this.state.editing = false;

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
  };

  handleDelete() {
    this.props.reportDelete(this.state);
  };

  handleEditing() {
    this.setState({editing: !this.state.editing});
  };

  render() {
    return (
      <div
        className='report-item'
        key={this.props.report.id}
        onDoubleClick={this.handleEditing}>
        <p>Source: {this.props.report.source}</p>
        <p>Upper-Rooms: {this.props.report.upperRooms}</p>
        <p>Lower-Rooms: {this.props.report.lowerRooms}</p>
        <p>Ceiling-Height: {this.props.report.ceilingHeight}</p>
        <p>Ceiling-Description: {this.props.report.ceilingDescription}</p>
        <p>Power/Heat: {this.props.report.powerHeat}</p>
        <p>Flooring Type: {this.props.report.flooringType}</p>
        <p>Type of Home: {this.props.report.typeOfHome}</p>
        <p>Age of Home: {this.props.report.yearBuilt}</p>
        <p>Standing Water: {this.props.report.standingWater + '"'}</p>
        <p>Foundation Type: {this.props.report.basement}</p>
        <p>Crawlspace or slab: {this.props.report.crawlOrSlab}</p>
        <p>Crawl or Attic Location: {this.props.report.crawlOrAtticAccessLocation}</p>
        <p>Contents: {this.props.report.contents}</p>
        <p>Access Permission: {this.props.report.accessPermissions}</p>
        <p>Set Lockbox: {this.props.report.setLockBox}</p>
        <p>Pets or Children: {this.props.report.petsOrChildren}</p>
        <p>Special Needs: {this.props.report.specialNeeds}</p>
        <p>Allergies: {this.props.report.respiratoryOrAllergies}</p>
        <p>growth: {this.props.report.growth}</p>
        <p>Odors: {this.props.report.odor}</p>
        <p>Monitors: {this.props.report.monitors}</p>
        <p>Email: {this.props.report.customerEmail}</p>
        <p>How did you Hear About us: {this.props.report.hearAboutUs}</p>
        <p>Customers Adjuster: {this.props.report.adjuster}</p>
        <p>Customers Agent: {this.props.report.customerAgent}</p>
        <button onClick={this.handleDelete}>delete</button>
        {renderIf(this.state.editing,
          <ReportForm
            report={this.state}
            buttonText='update'
            onComplete={this.props.reportUpdate} />
        )}
      </div>
    );
  };
}

const mapStateToProps = state => ({
  reports: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  reportUpdate: report => dispatch(reportUpdate(report)),
  reportDelete: report => dispatch(reportDelete(report)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportItem);
