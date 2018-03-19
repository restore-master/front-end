import React from 'react';

class YForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.y
      ? this.props.y
      : {
        name: '',
        cost: '',
        xId: this.props.xId,
        editing: false,
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
    this.setState({name: '', cost: '', editing: false});
  }

  render() {
    return (
      <form className='y-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
          placeholder='name'/>
        <input
          type='number'
          name='cost'
          value={this.state.cost}
          onChange={this.handleChange}
          placeholder='cost'/>

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default YForm;