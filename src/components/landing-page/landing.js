import React from 'react';

class Landing extends React.Component{
  render(){
    return(
      <div id="landing">
        <h1>Water Loss Reporter</h1>

        <img src={require('../../styles/assets/logo.png')} height="250" width="250"/>
        <p>checkout the Dashboard page to create forms</p>
        <p>checkout the Reports page to review your forms</p>
        <p>checkout the Statistics page to view your form data</p>

      </div>
    );

  }
}

export default Landing;
