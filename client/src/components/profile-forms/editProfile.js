import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  createProfile,
  history,
  getCurrentProfile,
  profile: { profile, loading }
}) => {
  const [formData, setformdata] = useState({
    handle: "",
    company: "",
    website: "",
    location: "",
    bio: "",
    status: "",
    githubusername: "",
    skills: "",
    youtube: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: ""
  });

  const [toggleSocial, settoggleSocial] = useState(false);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile !== null) {
      setformdata({
        handle: loading || !profile.handle ? "" : profile.handle,
        company: loading || !profile.company ? "" : profile.company,
        website: loading || !profile.website ? "" : profile.website,
        location: loading || !profile.location ? "" : profile.location,
        bio: loading || !profile.bio ? "" : profile.bio,
        status: loading || !profile.status ? "" : profile.status,
        githubusername:
          loading || !profile.githubusername ? "" : profile.githubusername,
        skills: loading || !profile.skills ? "" : profile.skills.join(","),
        youtube: loading || !profile.social ? "" : profile.social.youtube,
        facebook: loading || !profile.social ? "" : profile.social.facebook,
        twitter: loading || !profile.social ? "" : profile.social.twitter,
        instagram: loading || !profile.social ? "" : profile.social.instagram,
        linkedin: loading || !profile.social ? "" : profile.social.linkedin
      });
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    handle,
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin
  } = formData;

  const OnChange = e => {
    setformdata({ ...formData, [e.target.name]: e.target.value });
  };

  const OnSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Update Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some more information to make
        your profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => OnSubmit(e)}>
        <div className="form-group">
          <select name="status" value={status} onChange={e => OnChange(e)}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input
            value={company}
            onChange={e => OnChange(e)}
            type="text"
            placeholder="Company"
            name="company"
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input
            value={handle}
            onChange={e => OnChange(e)}
            type="text"
            placeholder="* Handle"
            name="handle"
          />
          <small className="form-text">Your Handle</small>
        </div>
        <div className="form-group">
          <input
            value={website}
            onChange={e => OnChange(e)}
            type="text"
            placeholder="Website"
            name="website"
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <input
            value={location}
            onChange={e => OnChange(e)}
            type="text"
            placeholder="Location"
            name="location"
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input
            value={skills}
            onChange={e => OnChange(e)}
            type="text"
            placeholder="* Skills"
            name="skills"
          />
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className="form-group">
          <input
            value={githubusername}
            onChange={e => OnChange(e)}
            type="text"
            placeholder="Github Username"
            name="githubusername"
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <textarea
            value={bio}
            onChange={e => OnChange(e)}
            placeholder="A short bio of yourself"
            name="bio"
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            onClick={() => settoggleSocial(!toggleSocial)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {toggleSocial && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x"></i>
              <input
                value={twitter}
                onChange={e => OnChange(e)}
                type="text"
                placeholder="Twitter URL"
                name="twitter"
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x"></i>
              <input
                value={facebook}
                onChange={e => OnChange(e)}
                type="text"
                placeholder="Facebook URL"
                name="facebook"
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x"></i>
              <input
                value={youtube}
                onChange={e => OnChange(e)}
                type="text"
                placeholder="YouTube URL"
                name="youtube"
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x"></i>
              <input
                value={linkedin}
                onChange={e => OnChange(e)}
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x"></i>
              <input
                value={instagram}
                onChange={e => OnChange(e)}
                type="text"
                placeholder="Instagram URL"
                name="instagram"
              />
            </div>
          </Fragment>
        )}
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
