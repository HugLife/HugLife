import React from 'react';
import Header from './Header.jsx';
import $ from 'jquery';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password:''
    }
  }

  userOnChange (e) {
    this.setState({
      user: e.target.value
    });
  }

  passwordOnChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  loginToApp() {
    console.log('clicked');
    $('#loginpage').hide();
    $('#barlistpage').show();
    $('#signuppage').hide();
  }

  render() {
    return (<div className='page-header' id='signuppage'>
      <Header />
      <h1>Welcome!</h1>
      <p>Please Sign Up Below! We hope you Enjoy</p>
      <h4>Username:</h4>
      <input value={this.state.user} onChange={this.userOnChange.bind(this)}/>  
      <h4>Password:</h4>
      <input value={this.state.password} onChange={this.passwordOnChange.bind(this)}/>   
      <button onClick={this.loginToApp} className='btn btn-warning'> Sign up </button>
    </div>) 
  }
}

export default Signup;