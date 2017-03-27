import React from 'react';
import Header from './Header.jsx';
import $ from 'jquery';

class Login extends React.Component {
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
  }

  render() {
    return (<div className='page-header' id='loginpage'>
      <Header />
      <h1>Welcome!</h1>
      <p>Welcome to Drink'd, you can view and rate bartenders in you area! Please sign in/sign up below!</p>
      <h4>Username:</h4>
      <input value={this.state.user} onChange={this.userOnChange.bind(this)}/>  
      <h4>Password:</h4>
      <input value={this.state.password} onChange={this.passwordOnChange.bind(this)}/>   
      <button onClick={this.loginToApp} className='btn btn-warning'> Sign in </button>

      <p>Sign up for our awesome app here</p>
    </div>) 
  }
}

export default Login;