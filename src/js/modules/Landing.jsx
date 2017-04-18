import React from 'react'
import RegistrationForm from './register/RegistrationForm'
import AlertContainer from 'react-alert';

export default class extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      alertBox: {
        error: (message) => {
          this.msg.error(message);
        }
      }
    }
    this.alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
  }

  /* Render Method */
  render() {
    return(
      <div id="landing">
        <AlertContainer ref={(a) => this.msg = a} {...this.alertOptions} />
        <div className="col-md-4">
          <h3>Sketch your way to a great API.</h3>
        </div>
        <div className="col-md-3 registration-section">

            <RegistrationForm alertBox={this.state.alertBox} />
        </div>
      </div>
    )
  }
}
