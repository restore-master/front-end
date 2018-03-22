import React from 'react';

class XForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.x
      ? this.props.x
      : {
        name: '',
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
      // .then(response => {
      //   console.log('=======id=======?', response.body.id);
      //   return response;
      // });
    console.log('customer object being sent on submit, to POST request', this.state);
    this.setState({
      name: '',
      date: '',
    });
  }

  render() {
    return (
      <form className='x-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          value={this.state.name}
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
