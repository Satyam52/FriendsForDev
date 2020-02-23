import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { addEducation } from "../../actions/profile";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setformData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });
  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = formData;
  const OnChanege = e =>
    setformData({ ...formData, [e.target.name]: e.target.value });

  const OnSubmit = e => {
    e.preventDefault();
    addEducation(formData, history);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Add Your Education</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any school or bootcamp that
        you have attended
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => OnSubmit(e)}>
        <div className="form-group">
          <input
            value={school}
            onChange={e => OnChanege(e)}
            type="text"
            placeholder="*  School or Bootcamp"
            name="school"
            required
          />
        </div>
        <div className="form-group">
          <input
            value={degree}
            onChange={e => OnChanege(e)}
            type="text"
            placeholder="* Degree/Certificate"
            name="degree"
            required
          />
        </div>
        <div className="form-group">
          <input
            value={fieldofstudy}
            onChange={e => OnChanege(e)}
            type="text"
            placeholder="Field of Study"
            name="fieldofstudy"
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            value={from}
            onChange={e => OnChanege(e)}
            type="date"
            name="from"
          />
        </div>
        <div className="form-group">
          <p>
            <input
              value={current}
              checked={current}
              onChange={e => {
                setformData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
              type="checkbox"
              name="current"
            />{" "}
            Current Job
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            value={to}
            onChange={e => OnChanege(e)}
            type="date"
            name="to"
            disabled={toDateDisabled ? "disabled" : ""}
          />
        </div>
        <div className="form-group">
          <textarea
            value={description}
            onChange={e => OnChanege(e)}
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(withRouter(AddEducation));
