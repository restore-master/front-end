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
        <nav className={'nav-bar'}>
          <ul>
            {renderIf(!this.props.token,
              <React.Fragment>
                <li className={'nav-item'}><a href="/">Home</a></li>
                <li className={'nav-item'}><a href="/dashboard">Dashboard</a></li>
                <li className={'nav-item'}><a href="/reports">Reports</a></li>
              </React.Fragment>
            )}
            {renderIf(this.props.token,
              <React.Fragment>
                <li><a href="/dashboard">Dashboard</a></li>
                <li onClick={() => this.props.store.dispatch({type: 'TOKEN_DELETE'})}><a href="/welcome/signin">Logout</a></li>
              </React.Fragment>
            )}
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
