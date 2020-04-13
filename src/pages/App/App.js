import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import * as jobAPI from '../../services/jobs-api'
import HomePage from '../../pages/HomePage/HomePage';
import AddJobPage from '../AddJobPage/AddJobPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
  
  state = {
    user: userService.getUser(),
    jobs: []
  };

  async componentDidMount() {
    const jobs = await jobAPI.getAll();
    this.setState({jobs});
  };

  handleAddJob = async newJobData => {
    const newJob = await jobAPI.create(newJobData);
    this.setState(state => ({
      jobs: [...state.jobs, newJob]
    }), () => this.props.history.push('/'));
  };

  handleDeleteJob = async id => {
    await jobAPI.deleteOne(id);
    this.setState(state => ({
      jobs: state.jobs.filter(j => j._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }



  render() {
    return (
      <div>
        <header className='header-footer'>
          Software Dev Job Tracker
          </header>
        <Switch>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/' render={() =>
            <HomePage
              handleLogout={this.handleLogout}
              user={this.state.user}
            />
          }/>
          <Route exact path='/new' render={() =>
            <AddJobPage 
              handleAddJob = {this.handleAddJob}
            />
          }/>
        </Switch>
        <nav className='header-footer'>
            <NavLink exact to='/'>HOME</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/new'>ADD NEW LISTING</NavLink>
        </nav>
      </div>
    );
  }
}

export default App;