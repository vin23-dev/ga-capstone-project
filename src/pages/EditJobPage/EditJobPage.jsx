import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.css'
import './EditJobPage.css';

class EditJobPage extends Component {
  constructor(props) { 
    super(props);
    this.state = {
          id: props.location.state.job._id,
          company: props.location.state.job.company,
          positionTitle: props.location.state.job.positionTitle,
          location: props.location.state.job.location,
          website: props.location.state.job.website,
          datePosted: props.location.state.job.datePosted,
          dateApplied: props.location.state.job.dateApplied, 
          estimatedSalary: props.location.state.job.estimatedSalary,
          notes: props.location.state.job.notes  
    }
      this.datePosted = React.createRef();
      this.dateApplied = React.createRef();
  
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateJob(this.state);

  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    let context = this;
        var elems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elems, {
            format: 'yyyy-mm-dd',
            onClose: context.handleDate
        });
  }

  handleDate = () => {
    this.setState({
        datePosted: this.datePosted.current.value,
        dateApplied: this.dateApplied.current.value
    });
  }

  render() {
    return (
      <>
       <h1 className="center">Edit Job</h1>
       <div className="form">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div>
            <label className="input-field">Company Name: </label>
            <input
              name="company"
              value={this.state.company}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label className="input-field">Position Title: </label>
            <input
              name="positionTitle"
              value={this.state.positionTitle}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label className="input-field">Location: </label>
            <input
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label className="input-field">Website: </label>
            <input
              name="website"
              value={this.state.website}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label className="input-field">Date Posted: </label>
            <input
              className="datepicker"
              name="datePosted"
              ref={this.datePosted}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label className="input-field">Date Applied: </label>
            <input
              className="datepicker"
              name="dateApplied"
              ref={this.dateApplied}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label className="input-field">Estimated Salary: </label>
            <input
              className="form-control"
              name="estimatedSalary"
              value={this.state.estimatedSalary}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label className="input-field">Notes: </label>
            <input
              name="notes"
              value={this.state.notes}
              onChange={this.handleChange}
            />
          </div>
          <button
            
            type="submit"
            className="btn red"
          >
            Update Job
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
        </div>
      </>
    );
  }
}

export default EditJobPage;