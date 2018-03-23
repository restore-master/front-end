import React from 'react';

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.customer
      ? this.props.customer
      : {
        name: '',
        date: '',
        reports: [],
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    console.log(this.state);
    this.props.onComplete(this.state);
    console.log('customer object being sent on submit, to POST request', this.state);

    this.setState({
      name: '',
      date: '',
      report: [],
    });
  }

  render() {
    return (
      <div className="customer-form">
        <form className='search-form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            placeholder= "Customer's Name"
          />

          <input
            className = 'dateInput'
            type='date'
            name='date'
            value={this.state.date}
            onChange={this.handleChange}
            placeholder= "Todays Date"
          />

          <button type='submit'>{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}

export default CustomerForm;
