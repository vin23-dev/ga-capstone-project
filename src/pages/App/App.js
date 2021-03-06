import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import * as jobAPI from '../../services/jobs-api'
import HomePage from '../../pages/HomePage/HomePage';
import AddJobPage from '../AddJobPage/AddJobPage';
import EditJobPage from '../EditJobPage/EditJobPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import 'materialize-css/dist/css/materialize.css'

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

  handleSignupOrLogin = async () => {
    const jobs = await jobAPI.getAll();
    this.setState({
      jobs,
      user: userService.getUser()});
  }

  render() {
    return (
      <div>
        {userService.getUser() ?
        <nav className='nav-wrapper red'>
          <ul className="left hide-on-med-and-down">
            <div className="links">
            <li><NavLink exact to='/'>HOME</NavLink></li>
            &nbsp;&nbsp;&nbsp;
            <li><NavLink exact to='/new'>ADD JOB</NavLink></li>
            </div>
          </ul>
        </nav>
        :<></>}
        <header className='header-footer center'>
          Software Development Job Tracker
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
          <Route exact path='/' render={({ history }) =>
          userService.getUser() ?
            <HomePage
              history={history}
              handleLogout={this.handleLogout}
              user={this.state.user}
              jobs={this.state.jobs}
              handleDeleteJob={this.handleDeleteJob}
            />
          :
            <Redirect to='/login'/>
          }/>
          <Route exact path='/new' render={({ history }) =>
          userService.getUser() ?
            <AddJobPage 
              history={history}
              handleAddJob = {this.handleAddJob}
            />
          :
            <Redirect to='/login'/>
          }/>
          <Route exact path='/edit' render={({history, location}) => 
          userService.getUser() ?
          <EditJobPage
            history={history}
            handleUpdateJob={this.handleUpdateJob}
            location={location}
            />
          :
            <Redirect to='/login'/>
          } />
        </Switch>
      </div>
    );
  }
}

export default App;