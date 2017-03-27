import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password:''
    }
  }

  onChange (e) {
    this.setState({
      user: e.target.value
    });
  }

  render() {
    return (<div className='page-header'>
      <h4>Username:</h4>
      <input value={this.state.terms} onChange={this.onChange.bind(this)}/>  
      <h4>Password:</h4>
      <input value={this.state.terms} onChange={this.onChange.bind(this)}/>   
      <button className='btn btn-warning'> Sign in </button>
    </div>) 
  }
}

export default Login;