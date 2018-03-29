import React from 'react';
import { connect } from 'react-redux';
import { renderIf } from '../../../lib/utils';
import CustomerItem from '../../customer/customer-item/customer-item';

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
    };
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  };

  handleDoubleClick() {
    if(this.props.customer.reports[0])
      this.setState({
        view: !this.state.view,
      });
  }

  render() {
    console.log(this.props.customer.reports);
    return (
      <div 
        id='report-container'
        onDoubleClick={this.handleDoubleClick}>
        <h3>Name: {this.props.customer.name} / Date: {this.props.customer.date}</h3>
        {this.state.view ? renderIf(this.props.customer.reports[0],
          <div className='container'> 
            <div class='one'> 
              <p>Source: {this.props.customer.reports[0].source}</p>
              <p>Upper-Rooms: {this.props.customer.reports[0].upperRooms}</p>
              <p>Lower-Rooms: {this.props.customer.reports[0].lowerRooms}</p>
              <p>Ceiling-Height: {this.props.customer.reports[0].ceilingHeight}</p>
              <p>Ceiling-Description: {this.props.customer.reports[0].ceilingDescription}</p>
              <p>Power/Heat: {this.props.customer.reports[0].powerHeat}</p>
              <p>Flooring Type: {this.props.customer.reports[0].flooringType}</p>
              <p>Type of Home: {this.props.customer.reports[0].typeOfHome}</p>
              <p>Age of Home: {this.props.customer.reports[0].ageOfHome}</p>
              <p>Standing Water: {this.props.customer.reports[0].standingWater + '"'}</p>
              <p>Foundation Type: {this.props.customer.reports[0].basement}</p>
              <p>Crawlspace or slab: {this.props.customer.reports[0].crawlOrSlab}</p>
            </div>
            <div className='two'>
              <p>Crawl or Attic Location: {this.props.customer.reports[0].crawlOrAtticAccessLocation}</p>
              <p>Contents: {this.props.customer.reports[0].contents}</p>
              <p>Access Permission: {this.props.customer.reports[0].accessPermissions}</p>
              <p>Set Lockbox: {this.props.customer.reports[0].setLockBox}</p>
              <p>Pets or Children: {this.props.customer.reports[0].petsOrChildren}</p>
              <p>Special Needs: {this.props.customer.reports[0].specialNeeds}</p>
              <p>Allergies: {this.props.customer.reports[0].respiratoryOrAllergies}</p>
              <p>Growth: {this.props.customer.reports[0].growth}</p>
              <p>Odors: {this.props.customer.reports[0].odor}</p>
              <p>Monitors: {this.props.customer.reports[0].monitors}</p>
              <p>Email: {this.props.customer.reports[0].customerEmail}</p>
              <p>How did you Hear About us: {this.props.customer.reports[0].hearAboutUs}</p>
              <p>Customers Adjuster: {this.props.customer.reports[0].adjuster}</p>
              <p>Customers Agent: {this.props.customer.reports[0].customerAgent}</p>
            </div>
          </div>     
        ) : undefined}
      </div>
    );
  }
}

export default Reports;