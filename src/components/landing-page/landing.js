import React from 'react';

class Landing extends React.Component{
  render(){
    return(
      <div id="landing"> 
        <h1>Water Loss Tracker</h1>
        <img src={`${__dirname}/whiteboard-challenge-37.jpeg`} height="500" weight="500"/>
        <p>checkout the dashboard page to create and view forms</p>
        <p>checkout the statistics page to view your form data</p>
      </div>
    );

  }
}

export default Landing;
