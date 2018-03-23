import React from 'react';

class Landing extends React.Component{
  render(){
    return(
      <div id="landing">
        <h1>Water Loss Reporter</h1>

        <img src={require(`${__dirname}/logo.png`)} height="250" width="250"/>
        <div className="landing-wrapper">
          <div className="landing-report landing-item">
            <h1>View Forms</h1>
            <a href="reports"><img src={require(`${__dirname}/openbook.png`)} height="250" width="250"/></a>
          </div>
          <div className="landing-dash landing-item">
            <h1>Create Forms</h1>
            <a href="dashboard"><img src={require(`${__dirname}/penandpaper.png`)} height="250" width="250"/></a>
          </div>
          <div className="landing-stats landing-item">
            <h1>View Statistics</h1>
            <a href="chart"><img src={require(`${__dirname}/stats.png`)} height="250" width="250"/></a>
          </div>
        </div>

      </div>
    );

  }
}

export default Landing;
