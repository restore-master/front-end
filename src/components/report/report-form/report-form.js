import React from 'react';
import { connect } from 'react-redux';

class ReportForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.report
      ? this.props.report
      : {
        //Loss Details
        // customer: this.props.customerId,
        source: '',
        upperRooms: '',
        lowerRooms: '',
        ceilingHeight: '',
        ceilingDescription: '',
        powerHeat: '',
        flooringType: '',
        typeOfHome: '',
        yearBuilt: '',
        standingWater: '',
        basement: '',
        crawlOrSlab: '',
        crawlOrAtticAccessLocation: '',
        contents: '',
        // Considerations ie: allergies, authorization, etc
        accessPermissions: '',
        setLockBox: '',
        petsOrChildren: '',
        specialNeeds: '',
        RespiratoryOrAllergies: '',
        Growth: '',
        odor: '',
        monitors: '',
        // Address/survey/mailing
        lossIsMailingAddress: false,
        customerEmail: '',
        hearAboutUs: '',
        adjuster: '',
        customerAgent: '',
        //Id and editing
        customer: this.props.customer[0]._id,
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
    console.log('handleSubmit this.state', this.state);
    this.props.onComplete(this.state);
    this.setState({source: '', upperRooms: '', editing: false});
  }

  render() {
    return (
      <form className='report-form' onSubmit={this.handleSubmit}>
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
        <input
          type='number'
          name='ceilingHeight'
          value={this.state.ceilingHeight}
          onChange={this.handleChange}
          placeholder='Ceiling Height: ft'/>
        <input
          type='text'
          name='ceilingDescription'
          value={this.state.ceilingDescription}
          onChange={this.handleChange}
          placeholder="Ceiling Description: 'vaulted'"/>
        <input
          type='text'
          name='powerHeat'
          value={this.state.powerHeat}
          onChange={this.handleChange}
          placeholder="Power/Heat"/>
        <input
          type='text'
          name='flooringType'
          value={this.state.flooringType}
          onChange={this.handleChange}
          placeholder="flooring Type"/>
        <input
          type='text'
          name='typeOfHome'
          value={this.state.typeOfHome}
          onChange={this.handleChange}
          placeholder="Type of Home"/>
        <input
          type='text'
          name='yearBuilt'
          value={this.state.yearBuilt}
          onChange={this.handleChange}
          placeholder="Age of Home"/>
        <input
          type='number'
          name='standingWater'
          value={this.state.standingWater}
          onChange={this.handleChange}
          placeholder="Standing Water: in"/>
        <input
          type='text'
          name='basement'
          value={this.state.basement}
          onChange={this.handleChange}
          placeholder="Basement, Slab, or Crawlspace"/>
        <input
          type='text'
          name='crawlOrSlab'
          value={this.state.crawlOrSlab}
          onChange={this.handleChange}
          placeholder="Finished or Unfinished"/>

        <input
          type='text'
          name='crawlOrAtticAccessLocation'
          value={this.state.crawlOrAtticAccessLocation}
          onChange={this.handleChange}
          placeholder="Crawl or Attic Access Location"/>
        <input
          type='text'
          name='contents'
          value={this.state.contents}
          onChange={this.handleChange}
          placeholder=""/>
        <h1> Considerations </h1>
        <input
          type='text'
          name='accessPermissions'
          value={this.state.accessPermissions}
          onChange={this.handleChange}
          placeholder='Access Permissions: yes or no?'/>
        <input
          type='text'
          name='setLockBox'
          value={this.state.setLockBox}
          onChange={this.handleChange}
          placeholder='Set Lockbox: yes or no?'/>
        <input
          type='text'
          name='petsOrChildren'
          value={this.state.petsOrChildren}
          onChange={this.handleChange}
          placeholder='Any Pets or Children?'/>
        <input
          type='text'
          name='specialNeeds'
          value={this.state.specialNeeds}
          onChange={this.handleChange}
          placeholder='Any Special Needs?'/>
        <input
          type='text'
          name='respiratoryOrAllergies'
          value={this.state.respiratoryOrAllergies}
          onChange={this.handleChange}
          placeholder='Any Respiratory Problems or Allergies?'/>
        <input
          type='text'
          name='growth'
          value={this.state.growth}
          onChange={this.handleChange}
          placeholder='Any Mold growth?'/>
        <input
          type='text'
          name='odor'
          value={this.state.odor}
          onChange={this.handleChange}
          placeholder='Any Odors?'/>
        <input
          type='text'
          name='monitors'
          value={this.state.monitors}
          onChange={this.handleChange}
          placeholder='Monitors'/>
        <h1> Address/Mailing Info </h1>
        <input
          type='boolean'
          name='lossIsMailingAddress'
          value={this.state.lossIsMailingAddress}
          onChange={this.handleChange}
          placeholder='Loss Address = Mailing Address?'/>
        <input
          type='email'
          name='customerEmail'
          value={this.state.customerEmail}
          onChange={this.handleChange}
          placeholder='Customer Email:'/>
        <input
          type='text'
          name='hearAboutUs'
          value={this.state.hearAboutUs}
          onChange={this.handleChange}
          placeholder='How did you head about us?'/>
        <input
          type='text'
          name='adjuster'
          value={this.state.adjuster}
          onChange={this.handleChange}
          placeholder='Do you have an Adjuster?'/>
        <input
          type='text'
          name='customerAgent'
          value={this.state.customerAgent}
          onChange={this.handleChange}
          placeholder='Who is your Agent?'/>


        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  customer: state.customer,
});

const mapDispatchToProps = (dispatch, getState) => ({
  expenseCreate: expense => dispatch(expenseCreate(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportForm);
