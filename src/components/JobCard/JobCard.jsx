import React from 'react';
import {Link} from 'react-router-dom';

function JobCard({props, job, handleDeleteJob}) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{job.company}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Position Title</dt>
                    <dd>{job.positionTitle}</dd>
                    <dt>Location</dt>
                    <dd>{job.location}</dd>
                    <dt>Website</dt>
                    <dd>{job.website}</dd>
                    <dt>Date Posted</dt>
                    <dd>{job.datePosted}</dd>
                    <dt>Date Applied</dt>
                    <dd>{job.dateApplied}</dd>
                    <dt>Estimated Salary</dt>
                    <dd>{job.estimatedSalary}</dd>
                    <dt>Notes</dt>
                    <dd>{job.notes}</dd>
                </dl>
            </div>
            <div className='panel-footer'>
            <Link
                className='btn btn-xs btn-warning'
                to={{
                        pathname: '/edit',
                        state: {job}
                }}
            >
            EDIT
            </Link>
                <button
                    className='btn btn-xs btn-danger margin-left-10'
                    onClick={() => handleDeleteJob(job._id)}
                >
                    DELETE
                </button>
            </div>
        </div>
    )
}

export default JobCard;