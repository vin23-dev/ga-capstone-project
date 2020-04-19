import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <header className="header-footer">Log In</header>
        <form  onSubmit={this.handleSubmit} >
         <div className="input-field">
            <input type="email" className="input-field" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
        </div>
        <div>
            <input type="password" className="input-field" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
        </div>
        <div className="input-field center">
              <button className="btn btn-large red">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
        </div>
        <div className="center"><br/>
            <Link to='/signup' className='btn red'>SIGN UP</Link>
        </div>
         </form>
      </div>
      );
    }
}


export default LoginPage;