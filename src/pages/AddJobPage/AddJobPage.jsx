import React, {Component} from 'react';
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.css'

class AddJobPage extends Component {
 constructor(props) { 
  super(props);
  this.state = {
        company: '',
        positionTitle: '',
        location: '',
        website: '',
        datePosted: '',
        dateApplied: '', 
        estimatedSalary: '',
        notes: ''  
}
    this.datePosted = React.createRef();
    this.dateApplied = React.createRef();

  };

  handleDate = () => {
      this.setState({
          datePosted: this.datePosted.current.value,
          dateApplied: this.dateApplied.current.value
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddJob(this.state);
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
      
  render() {
    return (
      <>
        <h1>Add Job</h1>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div>
            <label>Company Name: </label>
            <input
              name="company"
              value={this.state.company}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Position Title: </label>
            <input
              name="positionTitle"
              value={this.state.positionTitle}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Location: </label>
            <input
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Website: </label>
            <input
              name="website"
              value={this.state.website}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Date Posted: </label>
            <input
              className="datepicker"
              name="datePosted"
              ref={this.datePosted}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Date Applied: </label>
            <input
              className="datepicker"
              name="dateApplied"
              ref={this.dateApplied}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Estimated Salary: </label>
            <input
              name="estimatedSalary"
              value={this.state.estimatedSalary}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>notes: </label>
            <input
              name="notes"
              value={this.state.notes}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD JOB
          </button>
        </form>
      </>
      
    );
  }
}


export default AddJobPage;

