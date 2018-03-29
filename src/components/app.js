import React from 'react';
import {Provider} from 'react-redux';
import createStore from '../lib/store';
import Dashboard from './dashboard/dashboard';
import Landing from './landing-page/landing.js';
import Reports from './reports-page/reports.js';
import Chart from '../components/chart-page/chart';
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
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/reports" component={Reports}/>
              <Route exact path="/chart" component={Chart}/>
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
};

export default App;
