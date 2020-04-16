import React from 'react';
import {Link} from 'react-router-dom';
import './JobCard.css'

function JobCard({props, job, handleDeleteJob}) {
    return (
        
        <div className='card center'>
            <div className="card-content">
                <h3>{job.company}</h3>
            <div>
                <ul>
                    <h5>Position Title</h5>
                    <li>{job.positionTitle}</li>
                    <h5>Location</h5>
                    <li>{job.location}</li>
                    <h5>Website</h5>
                    <li>{job.website}</li>
                    <h5>Date Posted</h5>
                    <li>{job.datePosted}</li>
                    <h5>Date Applied</h5>
                    <li>{job.dateApplied}</li>
                    <h5>Estimated Salary</h5>
                    <li>{job.estimatedSalary}</li>
                    <h5>Notes</h5>
                    <li>{job.notes}</li>
                </ul>
            </div>
            <div>
            <Link
                className='btn red'
                to={{
                        pathname: '/edit',
                        state: {job}
                }}
            >
            EDIT
            </Link>
                <button
                    className='btn red'
                    onClick={() => handleDeleteJob(job._id)}
                >
                    DELETE
                </button>
            </div>
            </div>
        </div>
    )
}

export default JobCard;