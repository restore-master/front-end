import React from 'react';

class XForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.x
      ? this.props.x
      : {
        customerName: '',
        date: '',
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({
      customerName: '',
      date: '',
    });
  }

  render() {
    return (
      <form className='x-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='customerName'
          value={this.state.customerName}
          onChange={this.handleChange}
          placeholder= "Customer's Name"
        />

        <input
          type='datetime-local'
          name='date'
          value={this.state.date}
          onChange={this.handleChange}
          placeholder= "Todays Date"
        />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default XForm;
