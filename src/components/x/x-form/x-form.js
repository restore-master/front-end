import React from 'react';

class XForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.x
      ? this.props.x
      : {
        title: '',
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
    this.setState({title: ''});
  }

  render() {
    return (
      <form className='x-form' onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='x name'
        />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default XForm;