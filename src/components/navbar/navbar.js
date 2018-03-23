import React from 'react';
import { renderIf } from '../../lib/utils';
import { connect } from 'react-redux';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.action);

    return (
      <header>
        <nav>
          <ul>
            <React.Fragment>
              <li><a href="/">Home</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/reports">Reports</a></li>
              <li><a href="/chart">Charts</a></li>
            </React.Fragment>
          </ul>
        </nav>
      </header>
    );
  }
}

let mapDispatchToProps = dispatch => ({
  tokenDelete: () => dispatch(tokenDelete),
});

export default connect (mapDispatchToProps)(Navbar);
