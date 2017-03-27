import React from 'react';

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

  render() {
    return (<div className='page-header'>
      <h4>Username:</h4>
      <input value={this.state.user} onChange={this.userOnChange.bind(this)}/>  
      <h4>Password:</h4>
      <input value={this.state.password} onChange={this.passwordOnChange.bind(this)}/>   
      <button className='btn btn-warning'> Sign in </button>
    </div>) 
  }
}

export default Login;