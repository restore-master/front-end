import React from 'react';

class YForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.y
      ? this.props.y
      : {
        //Loss Details
        source: '',
        upperRooms: '',
        lowerRooms: '',
        ceilingHeight: '',
        ceilingDescription: '',
        powerHeat: '',
        flooringType: '',
        typeOfHome: '',
        ageofHome: '',
        standingWater: '',
        Basement: '',
        crawlOrSlab: '',
        crawlOrAtticAccessLocation: '',
        Contents: '',
        // Considerations ie: allergies, authorization, etc
        accessPermissions: '',
        setLockBox: '',
        petsOrChildren: '',
        specialNeeds: '',
        RespiratoryOrAllergies: '',
        Growth: '',
        Odor: '',
        Monitors: '',
        // Address/survey/mailing
        lossIsMailingAddress: false,
        email: '',
        hearAboutUs: '',
        adjuster: false,
        customersAgent: '',
        //Id and editing
        xId: this.props.xId,
        editing: false,
      };

    //handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({source: '', upperRooms: '', editing: false});
  }

  render() {
    return (
      <form className='y-form' onSubmit={this.handleSubmit}>
        <h1> Loss Details </h1>
        <input
          type='text'
          name='source'
          value={this.state.source}
          onChange={this.handleChange}
          placeholder='Source'/>
        <input
          type='text'
          name='upperRooms'
          value={this.state.upperRooms}
          onChange={this.handleChange}
          placeholder='Upper-Rooms Affected'/>
        <input
          type='text'
          name='lowerRooms'
          value={this.state.lowerRooms}
          onChange={this.handleChange}
          placeholder='Lower-Rooms Affected'/>

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default YForm;
