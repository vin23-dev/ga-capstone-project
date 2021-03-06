import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';


class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <header className="header-footer">Sign Up</header>
        <div className="form">
        <form className="center" onSubmit={this.handleSubmit} >
         <div className="input-field">
            <input type="text" className="input-field" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
        </div>
        <div className="input-field">
            <input type="email" className="input-field" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
        </div>
        <div className="col-sm-12">
            <input type="password" className="input-field" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
        </div>
        <div className="col-sm-12">
            <input type="password" className="input-field" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
         </div>
        <div className="col-sm-12 text-center">
            <button className='btn red' disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
        </div>
        </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;