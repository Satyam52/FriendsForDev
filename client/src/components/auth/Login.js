import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

function Login({ login, isAuthenticated }) {
  const [formData, setformData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;

  const onChangeHandler = e => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    login({ email, password });
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => onChangeHandler(e)}
            name="email"
            required
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={e => onChangeHandler(e)}
            placeholder="Password"
            name="password"
            minLength="6"
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Sign In" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
}
Login.protoTypes = {
  login: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { login })(Login);
