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
    this.setState({
      view: !this.state.view,
    });
  }

  render() {
    return (
      <div
        onDoubleClick={this.handleDoubleClick}>
        <h3>Name: {this.props.customer.name}, Date: {this.props.customer.date}</h3>
        {renderIf(this.state.view,
          <div>
            <p>{this.props.customer.reports[0].source}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Reports;