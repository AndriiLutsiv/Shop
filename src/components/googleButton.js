import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
const CLIENT_ID = '2374969714-bhtuug9he2tct5rm2ubeocvbcdocdc4l.apps.googleusercontent.com';
class GoogleBtn extends Component {
    state = {
      isLogined: false,
      accessToken: ''
  }
  login  = (response) => {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));
      sessionStorage.setItem('token', this.state.accessToken);
    }
  }
  logout = (response) => {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
    sessionStorage.removeItem('token');
  }
  handleLoginFailure = (response) => {
    alert('Failed to log in')
  }
  handleLogoutFailure = (response) => {
    alert('Failed to log out')
  }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
          />
        : <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      }
      {/* { this.state.accessToken ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null } */}
    </div>
    )
  }
}

export default GoogleBtn;