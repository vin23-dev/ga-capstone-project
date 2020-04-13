import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditJobPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.job
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateJob(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
       <h1>Edit Job</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Company Name: </label>
            <input
              className="form-control"
              name="company"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Position Title: </label>
            <input
              className="form-control"
              name="positionTitle"
              value={this.state.formData.positionTitle}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location: </label>
            <input
              className="form-control"
              name="location"
              value={this.state.formData.location}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Website: </label>
            <input
              className="form-control"
              name="website"
              value={this.state.formData.website}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Date Posted: </label>
            <input
              className="form-control"
              name="datePosted"
              value={this.state.formData.datePosted}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Date Applied: </label>
            <input
              className="form-control"
              name="dateApplied"
              value={this.state.formData.dateApplied}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Estimated Salary: </label>
            <input
              className="form-control"
              name="estimatedSalary"
              value={this.state.formData.estimatedSalary}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>notes: </label>
            <input
              className="form-control"
              name="notes"
              value={this.state.formData.notes}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            Update Job
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditJobPage;