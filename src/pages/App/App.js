import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import * as jobAPI from '../../services/jobs-api'
import HomePage from '../../pages/HomePage/HomePage';
import AddJobPage from '../AddJobPage/AddJobPage';
import EditJobPage from '../EditJobPage/EditJobPage';
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
  };

  handleUpdateJob = async updateJobData => {
    const updateJob = await jobAPI.update(updateJobData);
    const newJobsArray = this.state.jobs.map(j =>
        j._id === updateJob._id ? updateJob : j
      );
      this.setState(
        {jobs: newJobsArray},
        () => this.props.history.push('/')
      );
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
              jobs={this.state.jobs}
              handleDeleteJob={this.handleDeleteJob}
            />
          }/>
          <Route exact path='/new' render={() =>
            <AddJobPage 
              handleAddJob = {this.handleAddJob}
            />
          }/>
          <Route exact path='/edit' render={({history, location}) => 
          <EditJobPage
            handleUpdateJob={this.handleUpdateJob}
            location={location}
            />
          } />
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