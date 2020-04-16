import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import JobCard from '../../components/JobCard/JobCard';
import './HomePage.css'

const HomePage = (props) => {
    return (
    <>
      <div className="center">
        <NavBar
          user={props.user}
          handleLogout={props.handleLogout}
        />
      </div>
      <h1 className="heading">Job List</h1>
      <div className='center'>
          <>
          {props.jobs.map(job => 
            <JobCard
            key={job._id}
            job={job}
            handleDeleteJob={props.handleDeleteJob}
            />)}
          </>
      </div>
    </>
    );
};
  
  export default HomePage;