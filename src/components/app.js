import React from 'react';
import {Provider} from 'react-redux';
import createStore from '../lib/store';
import Dashboard from './dashboard/dashboard';
import Landing from './landing-page/landing.js';
import Navbar from './navbar/navbar';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const store = createStore();

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => console.log('__STATE__:', store.getState()));
  }

  render() {
    return(
      <main className='main-content'>
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Navbar/>
              <Route exact path="/" component={Landing}/>
              {/* <Route path="/welcome/:auth" component={props =>
                 token ? <Redirect to="/dashboard"/> : <Landing {...props}/>}/> */}
              {/* <Route path="/dashboard" component={Dashboard}/> */}
              <Route exact path="/dashboard" component={Dashboard}/>
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
};

export default App;
